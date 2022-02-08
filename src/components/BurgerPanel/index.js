import user from '../../resources/images/user.png';
import catalog from '../../resources/images/catalog.png';
import phone from '../../resources/images/phone.png';
import question from '../../resources/images/question.png';
import basket from '../../resources/images/basket.png';
import GooglePlay from '../../resources/svg/Google-Play.svg';
import AppStore from '../../resources/svg/App-Store.svg';
import rozetka from '../../resources/svg/rozetka.svg';

import spoiler from '../../utils/spoiler';

import './BurgerPanel.scss';

function BurgerPanel({open, setOpen}) {

    let classNames = "burger-panel";

    if (open) {
        classNames += " burger-panel-show"
    } else {
        classNames += " burger-panel-hide";
    }

    return (
        <div onClick={(e) => {
            if (e.target.classList.contains('burger-panel')) {
                setOpen(false)
            }
        }} className={classNames}>
            <div className="burger-panel__container">
                <div className="burger-panel__content">
                    <section className="burger-panel__top">
                        <div className="burger-panel__top__smth">
                            <img src={rozetka} alt="rozetka" />
                            <div onClick={() => setOpen(false)} className="burger-panel__top__smth-close">
                                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                            </div>
                        </div>
                        <div className="burger-panel__top__auth">
                            <div className="burger-panel__auth-item burger-panel__top__auth-item_1">
                                <img src={user} alt="user" />
                            </div>
                            <div className="burger-panel__top__auth-item burger-panel__top__auth-item_2">
                                <div className="burger-panel__top__auth-item__main">
                                    <a href="">Вход</a> 
                                    <a href="">Регистрация</a>
                                </div>
                                <div className="burger-panel__top__auth-item__text">
                                    Авторизуйтесь для получения расширенных возможностей 
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="burger-panel__actions burger-panel-padding">
                        <div className="burger-panel__actions-action">
                            <div>
                                <img src={catalog} alt="catalog" />
                            </div>
                            <h1>Каталок товаров</h1>
                        </div>
                        <div className="burger-panel__actions-action">
                            <div>
                                <img src={basket} alt="basket" />
                            </div>
                            <h1>Корзина</h1>
                        </div>
                        <div className="burger-panel__actions-action">
                            <div>
                                <img src={question} alt="question" />
                            </div>
                            <h1>Справочный центр</h1>
                        </div>
                        <div className="burger-panel__actions-action">
                            <div>
                                <img src={phone} alt="phone" />
                            </div>
                            <h1>+38 044 537-02-22</h1>
                        </div>
                    </section>
                    <section className="burger-panel__information burger-panel-padding">
                        <div className="line"></div>
                        <div className="burger-panel__information-item">
                            <div className="burger-panel__information-item-title burger-panel-title">Информация о компании</div>
                            <a className="burger-panel__information-item-link">О нас</a>
                            <a className="burger-panel__information-item-link">Условия использования сайта</a>
                            <a className="burger-panel__information-item-link">Вакансии</a>
                            <a className="burger-panel__information-item-link">Контакты</a>
                        </div>
                        <div className="line"></div>
                        <div className="burger-panel__information-item">
                            <div className="burger-panel__information-item-title burger-panel-title">Помощь</div>
                            <a className="burger-panel__information-item-link">Доставка и оплата</a>
                            <a className="burger-panel__information-item-link">Кредит</a>
                            <a className="burger-panel__information-item-link">Гарантия</a>
                            <a className="burger-panel__information-item-link">Возврат товара</a>
                            <a className="burger-panel__information-item-link">Сервисные центры</a>
                        </div>
                    </section>
                    <section className="burger-panel__spoilers burger-panel-padding">
                        <div className="line"></div>
                        <div className="burger-panel__spoilers__spoiler spoiler">
                            <div onClick={(e) => spoiler(e.target)} className="burger-panel__spoilers__spoiler-title spoiler-title burger-panel-title">Сервисы</div>
                            <div className="burger-panel__spoilers__spoiler-links spoiler-links">
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Доставка и оплата</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Кредит</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Гарантия</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Возврат товара</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Сервисные центры</a>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="burger-panel__spoilers__spoiler spoiler">
                        <div onClick={(e) => spoiler(e.target)} className="burger-panel__spoilers__spoiler-title spoiler-title burger-panel-title">Партнерам</div>
                            <div className="burger-panel__spoilers__spoiler-links spoiler-links">
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Бонусный счёт</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Rozetka Premium</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Подарочные сертификаты</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Rozetka обмен</a>
                                <a className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">Туры и отдых</a>
                            </div>
                        </div>
                        <div className="line"></div>
                    </section>
                    <section style={{paddingBottom: '20px'}} className="burger-panel__our-apps burger-panel-padding">
                        <div className="burger-panel__our-apps__title burger-panel-title">Скачивайте наши приложения</div>
                        <div className="burger-panel__our-apps__apps">
                            <img src={GooglePlay} alt="GooglePlay" />
                            <img src={AppStore} alt="AppStore" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BurgerPanel;