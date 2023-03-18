import GooglePlay from '../../assets/resources/svg/Google-Play.svg'
import AppStore from '../../assets/resources/svg/App-Store.svg'

import mastercard from '../../assets/resources/svg/mastercard.svg'
import visa from '../../assets/resources/svg/visa.svg'

import './style.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__our-apps">
                    <div className="footer__our-apps__title">Скачивайте наши приложения</div>
                    <div className="footer__our-apps__apps">
                        <img src={GooglePlay} alt="GooglePlay"/>
                        <img src={AppStore} alt="AppStore"/>
                    </div>
                </div>
                <div className="footer__more">
                    <div className="footer__details">
                        <div className="footer__details__row">
                            <div className="footer__details-item">
                                <div className="footer__details-item-title">Информация о компании</div>
                                <a href="" className="footer__details-item-link">О нас</a>
                                <a href="" className="footer__details-item-link">Условия использования сайта</a>
                                <a href="" className="footer__details-item-link">Вакансии</a>
                                <a href="" className="footer__details-item-link">Контакты</a>
                            </div>
                            <div className="footer__details-item">
                                <div className="footer__details-item-title">Помощь</div>
                                <a href="" className="footer__details-item-link">Доставка и оплата</a>
                                <a href="" className="footer__details-item-link">Кредит</a>
                                <a href="" className="footer__details-item-link">Гарантия</a>
                                <a href="" className="footer__details-item-link">Возврат товара</a>
                                <a href="" className="footer__details-item-link">Сервисные центры</a>
                            </div>
                            <div className="footer__details-item">
                                <div className="footer__details-item-title">Сервисы</div>
                                <a href="" className="footer__details-item-link">Бонусный счёт</a>
                                <a href="" className="footer__details-item-link">Rozetka Premium</a>
                                <a href="" className="footer__details-item-link">Подарочные сертификаты</a>
                                <a href="" className="footer__details-item-link">Rozetka Обмен</a>
                                <a href="" className="footer__details-item-link">Туры и отдых</a>
                            </div>
                            <div className="footer__details-item">
                                <div className="footer__details-item-title">Партнерам</div>
                                <a href="" className="footer__details-item-link">Продавать на Розетке</a>
                                <a href="" className="footer__details-item-link">Сотрудничество с нами</a>
                                <a href="" className="footer__details-item-link">Франчайзинг</a>
                                <a href="" className="footer__details-item-link">Аренда помещений</a>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer__pay">
                        <div className="footer__pay-row">
                            <div className="footer__pay-item">
                                <div className="footer__pay-item-pays">
                                    <img src={mastercard} alt="mastercard"/>
                                    <img src={visa} alt="visa"/>
                                </div>
                            </div>
                            <div className="footer__pay-item">
                                <div className="footer__pay-item-copyright">
                                    © Интернет-магазин «Розетка™»2001–2022 ТМ используется на основании лицензии
                                    правообладателя RozetkaLTD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer