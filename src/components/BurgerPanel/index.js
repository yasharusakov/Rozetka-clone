import user from '../../assets/resources/images/user.png'
import catalog from '../../assets/resources/images/catalog.png'
import phone from '../../assets/resources/images/phone.png'
import question from '../../assets/resources/images/question.png'
import basket from '../../assets/resources/images/basket.png'
import rozetka from '../../assets/resources/svg/rozetka.svg'
import {Link} from 'react-router-dom'
import spoiler from '../../utils/spoiler'
import GooglePlay from '../../assets/resources/svg/Google-Play.svg'
import AppStore from '../../assets/resources/svg/App-Store.svg'
import {useSelector} from 'react-redux'
import useAuthState from '../../hooks/useAuthState'
import {useActions} from '../../hooks/useActions'
import './style.scss'
import {Fragment, useMemo} from 'react'

function BurgerPanel() {
    const {setPopup} = useActions()
    const burgerPanel = useSelector(state => state.global.burgerPanel)
    const inCartLength = useSelector(state => state.inCart.inCart.length)
    const [userState, loading, auth] = useAuthState()

    let classNames = 'burger-panel'

    if (burgerPanel) {
        classNames += ' burger-panel-show'
    } else {
        classNames += ' burger-panel-hide'
    }

    const closeBurgerPanel = () => {
        setPopup({name: 'burgerPanel', type: false})
    }

    const action = (name) => {
        closeBurgerPanel()
        setPopup({name, type: true})
    }

    const actions = useMemo(() => {
        return [
            {name: 'catalog', src: catalog, title: 'Каталог товаров'},
            {name: 'basket', src: basket, title: 'Корзина'},
            {name: 'question', src: question, title: 'Справочный центр'},
            {name: 'phone', src: phone, title: '+38 044 537-02-22'}
        ]
    }, [])

    const information = useMemo(() => {
        return [
            {title: 'Информация о компании', links: ['О нас', 'Условия использования сайта', 'Вакансии', 'Контакты']},
            {title: 'Помощь', links: ['Доставка и оплата', 'Кредит', 'Гарантия', 'Возврат товара', 'Сервисные центры']}
        ]
    }, [])

    const informationWithSpoilers = useMemo(() => {
        return [
            {title: 'Cервисы', links: ['Бонусный счёт', 'Rozetka Premium', 'Подарочные сертификаты', 'Rozetka обмен', 'Туры и отдых']},
            {title: 'Партнерам', links: ['Продавать на Rozetka', 'Сотрудничество с нами', 'Франчайзинг', 'Возврат товара', 'Аренда помещений']}
        ]
    }, [])

    return (
        <div onClick={(e) => {
            if (e.target.classList.contains('burger-panel')) {
                closeBurgerPanel()
            }
        }} className={classNames}>
            <div className="burger-panel__container">
                <div className="burger-panel__content">
                    <section className="burger-panel__top">
                        <div className="burger-panel__top__smth">
                            <Link onClick={closeBurgerPanel} to="/">
                                <img src={rozetka} alt="rozetka"/>
                            </Link>
                            <div onClick={closeBurgerPanel} className="burger-panel__top__smth-close">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="burger-panel__top__auth">
                            <div style={userState ? {marginTop: '0px'} : {}} className="burger-panel__auth-item burger-panel__top__auth-item_1">
                                <img src={user} alt="user"/>
                            </div>
                            {
                                userState ? (
                                        <div className="logout">
                                            <button onClick={() => auth.signOut()}>Выйти</button>
                                        </div>
                                    ) :
                                    (
                                        <div className="burger-panel__top__auth-item burger-panel__top__auth-item_2">
                                            <div className="burger-panel__top__auth-item__main">
                                                <div onClick={() => {
                                                    closeBurgerPanel()
                                                    setPopup({name: 'login', type: true})
                                                }}>Вход
                                                </div>
                                                <div onClick={() => {
                                                    closeBurgerPanel()
                                                    setPopup({name: 'register', type: true})
                                                }}>Регистрация
                                                </div>
                                            </div>
                                            <div className="burger-panel__top__auth-item__text">
                                                Авторизуйтесь для получения расширенных возможностей
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </section>
                    <section className="burger-panel__actions burger-panel-padding">
                        {actions.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <div onClick={() => action(item.name)} className="burger-panel__actions-action">
                                        <div>
                                            <img src={item.src} alt={item.name}/>
                                        </div>
                                        <h1>{item.title}</h1>
                                        {
                                            (inCartLength !== 0 && item.name === 'basket') && (
                                                <div className="burger-panel__inCart">
                                                    <div className="burger-panel__inCartLength">{inCartLength}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Fragment>
                            )
                        })}
                    </section>
                    <section className="burger-panel__information burger-panel-padding">
                        {information.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <div className="line"></div>
                                    <div className="burger-panel__information-item">
                                        <div className="burger-panel__information-item-title burger-panel-title">{item.title}</div>
                                        {item.links.map((link, i2) => {
                                            return <a key={i2} className="burger-panel__information-item-link">{link}</a>
                                        })}
                                    </div>
                                </Fragment>
                            )
                        })}
                    </section>
                    <section className="burger-panel__spoilers burger-panel-padding">
                        {informationWithSpoilers.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <div className="line"></div>
                                    <div className="burger-panel__spoilers__spoiler spoiler">
                                        <div onClick={(e) => spoiler(e.target)} className="burger-panel__spoilers__spoiler-title spoiler-title burger-panel-title">
                                            {item.title}
                                        </div>
                                        <div className="burger-panel__spoilers__spoiler-links spoiler-links">
                                            {item.links.map((link, i2) => {
                                                return (
                                                    <a key={i2} className="burger-panel__spoilers__spoiler-links__spoiler-link spoiler-link" href="">
                                                        {link}
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                        <div className="line"></div>
                    </section>
                    <section style={{paddingBottom: '20px'}} className="burger-panel__our-apps burger-panel-padding">
                        <div className="burger-panel__our-apps__title burger-panel-title">Скачивайте наши приложения
                        </div>
                        <div className="burger-panel__our-apps__apps">
                            <img src={GooglePlay} alt="GooglePlay"/>
                            <img src={AppStore} alt="AppStore"/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BurgerPanel