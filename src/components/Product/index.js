import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";

import waranty from '../../resources/images/waranty.png';
import creditCard from '../../resources/images/credit-card.png';
import heart from '../../resources/svg/heart.svg';

import addDotForNumbers from '../../utils/addDotForNumbers';

import { addToCart } from '../../slices/inCartSlice';

import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../../slices/globalSlice';

import './Product.scss';

function Product() {
    const db = getFirestore();
    const dispatch = useDispatch();
    const {productID} = useParams();
    const [product, setProduct] = useState({});
    const inCart = useSelector(state => state.inCart.inCart);

    const requestProduct = async () => {
        const docRef = doc(db, 'products', productID);
        const docSnap = await getDoc(docRef);

        setProduct(docSnap.data());
    }

    useEffect(() => {
        requestProduct();

        
    }, []);

    const routes = [
        {
            path: `/p/${productID}`,
            title: 'Все о товаре'
        },
        {
            path: `/p/${productID}/characteristic`,
            title: 'Характеристика'
        },
        {
            path: `/p/${productID}/comments`,
            title: 'Отзывы'
        },
        {
            path: `/p/${productID}/questions`,
            title: 'Вопросы'
        },
        {
            path: `/p/${productID}/photo`,
            title: 'Фото'
        },
        {
            path: `/p/${productID}/accessories`,
            title: 'Покупают вместе'
        }
    ]

    const isActive = ({isActive}) => isActive ? 'product__navigation__product product__navigation__product_active' : 'product__navigation__product';

    const price2 = addDotForNumbers(product.price),
          stockPrice2 = addDotForNumbers(product.stockPrice);

    const hasItInCart = inCart.some(item => item === productID);

    return (
        <div className="product">
            <div className="product__name main-container">{product.name}</div>
            <div className="product__navigation">
                <div className="product__navigation__container main-container">
                    {
                        routes.map((item, i) => {
                            return <NavLink className={isActive} key={i} to={item.path}>{item.title}</NavLink>
                        })
                    }
                </div>
            </div>
            <div className="product__row main-container">
                <div className="product__item product__item_1">
                    <div className="product__item_1__picture">
                        <img src={product.url} alt={product.title} />
                    </div>
                    <div className="product__item_1__characteristic">
                        {product.characteristic}
                    </div>
                </div>
                <div className="product__item product__item_2">
                    <div className="product__item_2__element">
                        <div className="product__item_2__element-price">
                            {
                                product.stockPrice !== false ? 
                                    (
                                        <>
                                            <div className="product__item_2__element-price-default product__item_2__element-price-default-line-through">{price2} ₴</div>
                                            <div className="product__item_2__element-price-stockPrice">{stockPrice2} ₴</div>
                                        </>
                                    ) :
                                    <div className="product__item_2__element-price-default">{price2} ₴</div>
                            }
                        </div>
                        {
                            hasItInCart ? 
                                <div 
                                    onClick={() => dispatch(setPopup({name: 'basket', type: true}))} 
                                    className="product__item_2__element-inCart">В корзине
                                </div> 
                                : 
                                <div
                                    onClick={() => dispatch(addToCart(productID))}
                                    className="product__item_2__element-buy">Купить
                                </div>
                        }
                        <div className="product__item_2__element-heart">
                            <img src={heart} alt="heart" />
                        </div>
                    </div>
                    <div className="product__item_2__element product__item_2__element_2">
                        <div className="product__item_2__element_2__item">
                            <div className="product__item_2__element_2__item__picture">
                                <img src={waranty} alt="waranty" />
                            </div>
                            <div className="product__item_2__element_2__item__text"><strong>Оплата.</strong> Google Pay, Картой онлайн, Безналичными для юридических лиц, PrivatPay, Apple Pay</div>
                        </div>
                        <div className="line"></div>
                        <div className="product__item_2__element_2__item">
                            <div className="product__item_2__element_2__item__picture">
                                <img src={creditCard} alt="credit-card" />
                            </div>
                            <div className="product__item_2__element_2__item__text"><strong>Гарантия.</strong> 12 месяцев Обмен/возврат товара в течение 14 дней </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;