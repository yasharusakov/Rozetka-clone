import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setPopup } from '../../slices/globalSlice';

import console from '../../resources/images/catalog/console.png';
import desktop from '../../resources/images/catalog/desktop.png';
import iphone from '../../resources/images/catalog/iphone.png';

import './Catalog.scss';

function Catalog() {
    const dispatch = useDispatch();

    const closeCatalog = () => {
        dispatch(setPopup({name: 'catalog', type: false}))
    }

    return (
        <div className="catalog">
            <Link onClick={closeCatalog} to="/c/computers-notebooks" className="catalog-item">
                <img src={desktop} alt="desktop" />
                <div className="catalog-item-text">Ноутбуки и компьютеры</div>
            </Link>
            <a onClick={closeCatalog} className="catalog-item">
                <img src={iphone} alt="iphone" />
                <div className="catalog-item-text">Смартфоны, ТВ и электроника</div>
            </a>
            <a onClick={closeCatalog} className="catalog-item">
                <img src={console} alt="console" />
                <div className="catalog-item-text">Товары для геймеров</div>
            </a>
        </div>
    )
}

export default Catalog;