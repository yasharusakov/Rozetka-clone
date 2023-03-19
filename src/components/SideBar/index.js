import {Link} from 'react-router-dom'
import {Fragment} from 'react'
import desktop from '../../assets/resources/images/catalog/desktop.png'
import console from '../../assets/resources/images/catalog/console.png'
import iphone from '../../assets/resources/images/catalog/iphone.png'
import GooglePlay from '../../assets/resources/svg/Google-Play.svg'
import AppStore from '../../assets/resources/svg/App-Store.svg'
import mastercard from '../../assets/resources/svg/mastercard.svg'
import visa from '../../assets/resources/svg/visa.svg'
import './style.scss'

function SideBar() {
    const details = [
        {title: 'Информация о компании', links: ['О нас', 'Условия использования сайта', 'Вакансии', 'Контакты']},
        {title: 'Помощь', links: ['Доставка и оплата', 'Кредит', 'Гарантия', 'Возврат товара', 'Сервисные центры']},
        {title: 'Сервисы', links: ['Бонусный счёт', 'Rozetka Premium', 'Подарочные сертификаты', 'Rozetka Обмен', 'Туры и отдых']},
        {title: 'Партнерам', links: ['Продавать на Розетке', 'Сотрудничество с нами', 'Франчайзинг', 'Аренда помещений']}
    ]

    const catalog = [
        {to: '/c/computers-notebooks', src: desktop, title: 'Ноутбуки и компьютеры'},
        {to: '/c/phones', src: iphone, title: 'Смартфоны, ТВ и электроника'},
        {to: '/c/consoles', src: console, title: 'Товары для геймеров'}
    ]

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__catalog">
                    {catalog.map(({to, src, title}, i) => {
                        return (
                            <Link to={to} className="sidebar__catalog-item">
                                <img src={src} alt="desktop" className="sidebar__catalog-item-icon"/>
                                <span className="sidebar__catalog-item-title">{title}</span>
                            </Link>
                        )
                    })}
                </div>
                <div className="line"></div>
                <div className="sidebar__our-apps">
                    <div className="sidebar__our-apps__title sidebar-title">Скачивайте наши приложения</div>
                    <div className="sidebar__our-apps__apps">
                        <img src={GooglePlay} alt="GooglePlay"/>
                        <img src={AppStore} alt="AppStore"/>
                    </div>
                </div>
                <div className="line"></div>
                <div className="sidebar__information">
                    {details.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                <div className="sidebar__information-item">
                                    <div className="sidebar__information-item-title sidebar-title">{item.title}</div>
                                    {item.links.map((link, i2) => {
                                        return <a key={i2} className="sidebar__information-item-link">{link}</a>
                                    })}
                                </div>
                                <div className="line"></div>
                            </Fragment>
                        )
                    })}
                </div>
                <div className="sidebar__pay">
                    <div className="sidebar__pay__payments">
                        <a className="sidebar__pay__payments__link">
                            <img src={mastercard} alt="mastercard"/>
                        </a>
                        <a className="sidebar__pay__payments__link">
                            <img src={visa} alt="visa"/>
                        </a>
                    </div>
                    <div className="sidebar__pay__text">
                        ТМ используется на основании лицензии правообладателя RozetkaLTD.
                    </div>
                    <div className="sidebar__pay__copyright">
                        © Интернет-магазин «Розетка™» <br/>
                        2001–2022
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default SideBar