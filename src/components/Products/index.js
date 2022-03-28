import heart from '../../resources/svg/heart.svg';
import goodstub from '../../resources/svg/goods-stub.svg';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { collection, getFirestore, onSnapshot, query, where, orderBy, startAt } from "firebase/firestore";

import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../slices/itemsSlice';

import { filterByBrends, filterBySort } from '../../slices/filterSlice';

import observer from '../../utils/observer';
import addDotForNumbers from '../../utils/addDotForNumbers';

import './Products.scss';

function Products({header, filterName, symbol, filterType, limitProducts, useSetItems, useData, data}) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const db = getFirestore();
    const [products, setProducts] = useState([]);
    const [productsLimit, setProductsLimit] = useState(5);

    const requestProducts = () => {
        
        if (useData) {
            const collectionRef = collection(db, 'products');

            onSnapshot(collectionRef, (snapshot) => {
                const items = snapshot.docs.map(doc => ({...doc.data(), productID: doc.id}));
                const filteredData = items.filter(item => item.name.search(RegExp(data, 'ig')) !== -1);
                setProducts(filteredData);
                if (useSetItems) dispatch(setItems(filteredData));
            });
        } else {
            let q = query(collection(db, 'products'), where(filterName, symbol, filterType));

            onSnapshot(q, (snapshot) => {
                const items = snapshot.docs.map(doc => ({...doc.data(), productID: doc.id}));
                setProducts(items);
                if (useSetItems) dispatch(setItems(items));
            });
        }
    }

    useEffect(() => {
        return requestProducts();
    }, [data])

    useEffect(() => {
        observer();
    }, [products, filter, productsLimit]);

    let items = [];

    if (limitProducts) {
        if (products.length > 0) {
            const elements = [];
            for (let i = 0; i < productsLimit; i++) {
                elements.push(products[i]);
            }
            items = [...elements];
        }
    } else {
        items = [...products];
    }

    const brends = filterByBrends(items, filter);
    const sortBy = filterBySort(brends, filter);

    const elements = sortBy.map(({productID, name, url, price, stockPrice}) => {

        const price2 = addDotForNumbers(price),
              stockPrice2 = addDotForNumbers(stockPrice),
              path = `/p/${productID}`;

        return (
            <div key={productID} data-src={url} className="products__items__item element-animation">
                <div className="products__items__item-heart">
                    <img src={heart} alt="heart" />
                </div>
                <Link to={path} className="products__items__item-picture element-target">
                    <img src={goodstub} alt={name} />
                </Link>
                <Link to={path} className="products__items__item-name">{name.slice(0, 39)}</Link>
                <div className="products__items__item-price">
                    {
                        stockPrice !== false ? (
                            <>
                                <div className="products__items__item-price-through">{price2} ₴</div>
                                <div className="products__items__item-price-stock">{stockPrice2} ₴</div>
                            </>
                        ) :
                        <div className="products__items__item-price-default">{price2} ₴</div>
                    }
                </div>
            </div>
        )
    })

    return (
        <div className="products">
            <div className="products__container">
                {header ? <div className="products__category-name">{header}</div> : null}
                <div style={{marginTop: header ? '25px' : '0'}} className="products__items">
                    {elements}
                </div>
                {
                    limitProducts ? <button style={{display: productsLimit === products.length ? 'none' : ''}} onClick={() => setProductsLimit((productsLimit) => productsLimit + 5)} className="products__show-more">Показать еще</button> : null
                }
            </div>
        </div>
    )
}

export default Products;