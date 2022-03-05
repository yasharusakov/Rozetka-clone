import heart from '../../resources/svg/heart.svg';
import goodstub from '../../resources/svg/goods-stub.svg';

import { useEffect, useState } from 'react';

import { collection, getFirestore, onSnapshot, query, limit, where } from "firebase/firestore";

import observer from '../../utils/observer';
import addDotForNumbers from '../../utils/addDotForNumbers';

import './Products.scss';

function Products({header, filterName, symbol, filterType, limitProducts, filtersData}) {
    const db = getFirestore();
    const [productLimit, setProductLimit] = useState(limitProducts);
    const [products, setProducts] = useState([]);

    const requestProducts = () => {
        
        let q;

        if (productLimit) {
            q = query(collection(db, 'products'), where(filterName, symbol, filterType), limit(productLimit));
        } else {
            q = query(collection(db, 'products'), where(filterName, symbol, filterType));
        }

        if (filtersData) {
            if (filtersData.brend && filtersData.price) {
                q = query(collection(db, 'products'), where(filterName, symbol, filterType), where('price', '>=', +filtersData.price[0]), where('brend', 'in', filtersData.brend));
            } else if (filtersData.brend) {
                q = query(collection(db, 'products'), where(filterName, symbol, filterType), where('brend', 'in', filtersData.brend));
            } else if (filtersData.price) {
                q = query(collection(db, 'products'), where(filterName, symbol, filterType), where('price', '>=', +filtersData.price[0]));
            }
        }

        const unsub = onSnapshot(q, (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({...doc.data(), productID: doc.id})));
        });

        setProductLimit(productLimit => productLimit + 5);

        return unsub;
    }

    useEffect(() => {
        requestProducts();
    }, [filtersData]);

    useEffect(() => {
        observer();
    }, [products]);

    const elements = products.map(({productID, name, url, price, stockPrice}) => {

        const price2 = addDotForNumbers(price),
              stockPrice2 = addDotForNumbers(stockPrice);

        return (
            <div key={productID} data-src={url} className="products__items__item element-animation">
                <div className="products__items__item-heart">
                    <img src={heart} alt="heart" />
                </div>
                <div className="products__items__item-picture element-target">
                    <img src={goodstub} alt={name} />
                </div>
                <a className="products__items__item-name">{name.slice(0, 39)}</a>
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
                    limitProducts ? <button style={{display: productLimit === 15 ? 'none' : ''}} onClick={requestProducts} className="products__show-more">Показать еще</button> : null
                }
            </div>
        </div>
    )
}

export default Products;