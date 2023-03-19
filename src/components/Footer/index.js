import GooglePlay from '../../assets/resources/svg/Google-Play.svg'
import AppStore from '../../assets/resources/svg/App-Store.svg'

import mastercard from '../../assets/resources/svg/mastercard.svg'
import visa from '../../assets/resources/svg/visa.svg'

import './style.scss'

function Footer() {

    const details = [
        {title: 'Информация о компании', links: ['О нас', 'Условия использования сайта', 'Вакансии', 'Контакты']},
        {title: 'Помощь', links: ['Доставка и оплата', 'Кредит', 'Гарантия', 'Возврат товара', 'Сервисные центры']},
        {title: 'Сервисы', links: ['Бонусный счёт', 'Rozetka Premium', 'Подарочные сертификаты', 'Rozetka Обмен', 'Туры и отдых']},
        {title: 'Партнерам', links: ['Продавать на Розетке', 'Сотрудничество с нами', 'Франчайзинг', 'Аренда помещений']}
    ]

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
                            {details.map((item, i) => {
                                return (
                                    <div key={i} className="footer__details-item">
                                        <div className="footer__details-item-title">{item.title}</div>
                                        {item.links.map((link, i2) => {
                                            return <a key={i2} href="#" className="footer__details-item-link">{link}</a>
                                        })}
                                    </div>
                                )
                            })}
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