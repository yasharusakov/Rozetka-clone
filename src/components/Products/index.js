import heart from '../../resources/svg/heart.svg';

import './Products.scss';

function Products() {

    const products = [
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: 229
        },
        {
            name: 'Комплект Lovare Набор три тубуса c',
            url: 'https://content1.rozetka.com.ua/goods/images/preview/229034370.jpg',
            price: 270,
            stockPrice: false
        },
    ]

    return (
        <div className="products">
            <div className="products__container">
                <div className="products__product">
                    <div className="products__catagory-name">Акционные предложения</div>
                    <div className="products__items">
                        {
                            products.map(item => {
                                return (
                                    <div className="products__item">
                                        <div className="products__item-heart">
                                            <img src={heart} alt="heart" />
                                        </div>
                                        <img className="products__item-product" src={item.url} alt="product" />
                                        <a className="products__item-name">{item.name}</a>
                                        <div className="products__item-price">
                                            {
                                            item.stockPrice !== false ? (
                                                <>
                                                        <div className="products__item-price-initial-price">{item.price} ₴</div>
                                                        <div className="products__item-price-stock-price">{item.stockPrice} ₴</div>
                                                </>
                                            ) :
                                            <div className="products__item-price-default-price">{item.price} ₴</div>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;