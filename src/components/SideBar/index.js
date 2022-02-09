import desktop from '../../resources/images/catalog/desktop.png';
import console from '../../resources/images/catalog/console.png';
import iphone from '../../resources/images/catalog/iphone.png';
import GooglePlay from '../../resources/svg/Google-Play.svg';
import AppStore from '../../resources/svg/App-Store.svg';
import mastercard from '../../resources/svg/mastercard.svg';
import visa from '../../resources/svg/visa.svg';

import './SideBar.scss';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__catalog">
                    <a href="" className="sidebar__catalog-item">
                        <img src={desktop} alt="desktop" className="sidebar__catalog-item-icon" />
                        <span className="sidebar__catalog-item-title">Ноутбуки и компьютеры</span>
                    </a>
                    <a href="" className="sidebar__catalog-item">
                        <img src={iphone} alt="iphone" className="sidebar__catalog-item-icon" />
                        <span className="sidebar__catalog-item-title">Смартфоны, ТВ и электроника</span>
                    </a>
                    <a href="" className="sidebar__catalog-item">
                        <img src={console} alt="console" className="sidebar__catalog-item-icon" />
                        <span className="sidebar__catalog-item-title">Товары для геймеров</span>
                    </a>
                </div>
                <div className="line"></div>
                <div className="sidebar__our-apps">
                    <div className="sidebar__our-apps__title sidebar-title">Скачивайте наши приложения</div>
                    <div className="sidebar__our-apps__apps">
                        <img src={GooglePlay} alt="GooglePlay" />
                        <img src={AppStore} alt="AppStore" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="sidebar__information">
                    <div className="sidebar__information-item">
                        <div className="sidebar__information-item-title sidebar-title">Информация о компании</div>
                        <a className="sidebar__information-item-link">О нас</a>
                        <a className="sidebar__information-item-link">Условия использования сайта</a>
                        <a className="sidebar__information-item-link">Вакансии</a>
                        <a className="sidebar__information-item-link">Контакты</a>
                    </div>
                    <div className="line"></div>
                    <div className="sidebar__information-item">
                        <div className="sidebar__information-item-title sidebar-title">Помощь</div>
                        <a className="sidebar__information-item-link">Доставка и оплата</a>
                        <a className="sidebar__information-item-link">Кредит</a>
                        <a className="sidebar__information-item-link">Гарантия</a>
                        <a className="sidebar__information-item-link">Возврат товара</a>
                        <a className="sidebar__information-item-link">Сервисные центры</a>
                    </div>
                    <div className="line"></div>
                    <div className="sidebar__information-item">
                        <div className="sidebar__information-item-title sidebar-title">Сервисы</div>
                        <a className="sidebar__information-item-link">Бонусный счёт</a>
                        <a className="sidebar__information-item-link">Rozetka Premium</a>
                        <a className="sidebar__information-item-link">Подарочные сертификаты</a>
                        <a className="sidebar__information-item-link">Rozetka обмен</a>
                        <a className="sidebar__information-item-link">Туры и отдых</a>
                    </div>
                    <div className="line"></div>
                    <div className="sidebar__information-item">
                        <div className="sidebar__information-item-title sidebar-title">Партнерам</div>
                        <a className="sidebar__information-item-link">Продавать на Розетке</a>
                        <a className="sidebar__information-item-link">Сотрудничество с нами</a>
                        <a className="sidebar__information-item-link">Подарочные сертификаты</a>
                        <a className="sidebar__information-item-link">Франчайзинг</a>
                        <a className="sidebar__information-item-link">Аренда помещений</a>
                    </div>
                </div>
                <div className="line"></div>
                <div className="sidebar__pay">
                    <div className="sidebar__pay__payments">
                        <a className="sidebar__pay__payments__link">
                            <img src={mastercard} alt="mastercard" />
                        </a>
                        <a className="sidebar__pay__payments__link">
                            <img src={visa} alt="visa" />
                        </a>
                    </div>
                    <div className="sidebar__pay__text">
                        ТМ используется на основании лицензии правообладателя RozetkaLTD.
                    </div>
                    <div className="sidebar__pay__copyright">
                        © Интернет-магазин «Розетка™» <br />
                        2001–2022
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default SideBar;