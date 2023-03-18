import {Link} from 'react-router-dom'
import console from '../../assets/resources/images/catalog/console.png'
import desktop from '../../assets/resources/images/catalog/desktop.png'
import iphone from '../../assets/resources/images/catalog/iphone.png'

import './style.scss'
import {useActions} from '../../hooks/useActions'

function Catalog() {
    const {setPopup} = useActions()

    const closeCatalog = () => {
        setPopup({name: 'catalog', type: false})
    }

    return (
        <div className="catalog">
            <Link onClick={closeCatalog} to="/c/computers-notebooks" className="catalog-item">
                <img src={desktop} alt="desktop"/>
                <div className="catalog-item-text">Ноутбуки и компьютеры</div>
            </Link>
            <a onClick={closeCatalog} className="catalog-item">
                <img src={iphone} alt="iphone"/>
                <div className="catalog-item-text">Смартфоны, ТВ и электроника</div>
            </a>
            <a onClick={closeCatalog} className="catalog-item">
                <img src={console} alt="console"/>
                <div className="catalog-item-text">Товары для геймеров</div>
            </a>
        </div>
    )
}

export default Catalog