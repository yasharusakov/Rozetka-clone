import console from '../../resources/images/catalog/console.png';
import desktop from '../../resources/images/catalog/desktop.png';
import iphone from '../../resources/images/catalog/iphone.png';

import './Catalog.scss';

function Catalog() {
    return (
        <div className="catalog">
            <div className="catalog__container">
                <div className="catalog__content">
                    <div className="catalog__close">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                    </div>
                    <div className="catalog__title">Каталог товаров</div>
                    <div className="line"></div>
                    <div className="catalog-row">
                        <a className="catalog-item">
                            <img src={desktop} alt="desktop" />
                            <div className="catalog-item-text">Ноутбуки и компьютеры</div>
                        </a>
                        <a className="catalog-item">
                            <img src={iphone} alt="iphone" />
                            <div className="catalog-item-text">Смартфоны, ТВ и электроника</div>
                        </a>
                        <a className="catalog-item">
                            <img src={console} alt="console" />
                            <div className="catalog-item-text">Товары для геймеров</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;