import heart from '../../resources/svg/heart.svg';
import goodstub from '../../resources/svg/goods-stub.svg';

import { useEffect, useState } from 'react';

import { collection, getFirestore, onSnapshot, query, limit, orderBy } from "firebase/firestore";

import observer from '../../utils/observer';
import addDotForNumbers from '../../utils/addDotForNumbers';

import './Products.scss';

function Products() {
    const db = getFirestore();
    const [productLimit, setProductLimit] = useState(5);
    const [products, setProducts] = useState([]);

    const requestProducts = () => {
        const q = query(collection(db, 'products'), orderBy('stockPrice', 'desc'), limit(productLimit));

        const unsub = onSnapshot(q, (snapshot) => {
            setProducts(snapshot.docs.map(doc => ({...doc.data(), productID: doc.id})));
        });

        setProductLimit(productLimit => productLimit + 5);

        return unsub;
    }

    useEffect(() => {
        const unsub = requestProducts();

        return unsub;
    }, []);

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
                    <img loading="lazy" src={goodstub} alt={name} />
                </div>
                <a className="products__items__item-name">{name.slice(0, 39)}</a>
                <div className="products__items__item-price">
                    {
                        stockPrice !== '' ? (
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
                <div className="products__category-name">Акционные предложения</div>
                <div className="products__items">
                    {elements}
                </div>
                <button style={{display: productLimit === 15 ? 'none' : ''}} onClick={requestProducts} className="products__show-more">Показать еще</button>
            </div>
        </div>
    )
}

export default Products;