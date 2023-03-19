import {Link} from 'react-router-dom'
import {useActions} from '../../hooks/useActions'
import console from '../../assets/resources/images/catalog/console.png'
import desktop from '../../assets/resources/images/catalog/desktop.png'
import iphone from '../../assets/resources/images/catalog/iphone.png'
import './style.scss'

function Catalog() {
    const {setPopup} = useActions()

    const closeCatalog = () => {
        setPopup({name: 'catalog', type: false})
    }

    const array = [
        {to: '/c/computers-notebooks', src: desktop, text: 'Ноутбуки и компьютеры'},
        {to: '/c/phones', src: iphone, text: 'Смартфоны, ТВ и электроника'},
        {to: '/c/consoles', src: console, text: 'Товары для геймеров'}
    ]

    return (
        <div className="catalog">
            {array.map(({to, src, text}, i) => {
                return (
                    <Link key={i} onClick={closeCatalog} to={to} className="catalog-item">
                        <img src={src} alt={text}/>
                        <div className="catalog-item-text">{text}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Catalog