import console from '../../resources/images/catalog/console.png';
import desktop from '../../resources/images/catalog/desktop.png';
import iphone from '../../resources/images/catalog/iphone.png';

import './Catalog.scss';

function Catalog() {
    return (
        <div className="catalog">
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
    )
}

export default Catalog;