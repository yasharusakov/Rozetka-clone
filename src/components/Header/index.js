import search from '../../resources/images/search.png';
import basket from '../../resources/images/basket.png';
import catalog from '../../resources/images/catalog.png';
import user from '../../resources/images/user.png';
import rozetka from '../../resources/svg/rozetka.svg';

import { Link } from 'react-router-dom';

import Popup from '../Popup';
import BurgerPanel from '../BurgerPanel';
import Catalog from '../Catalog';
import Login from '../Login';
import Register from '../Register';
import Basket from '../Basket';

import { useDispatch, useSelector } from 'react-redux';

import { setPopup } from '../../slices/globalSlice';

import './Header.scss';

function Header() {

    const dispatch = useDispatch();
    const inCart = useSelector(state => state.inCart.inCart);

    return (
        <header className="header wrapper__header">
            <div className="header__container">
                <div onClick={() => dispatch(setPopup({name: 'burgerPanel', type: true}))} className="header__burger">
                    <div className="header__burger-icon">
                        <span></span>
                    </div>
                </div>
                <Link to="/">
                    <img src={rozetka} alt="rozetka" />
                </Link>
                <svg viewBox="0 0 40 40" width="80" height="40"><path d="M27.9005 29.9007C25.7318 33.6934 23.0435 36.8025 20.0388 36.7364C18.1638 36.6922 16.3791 36.0087 14.7525 34.9282C15.2721 34.0021 18.5478 29.3715 27.9005 29.9007ZM40.4837 20.0882C40.4385 30.8268 31.4473 39.5147 20.4229 39.4486C9.39847 39.4045 0.542786 30.6504 0.542786 19.9118C0.542786 12.9438 4.11217 7.93834 7.50082 5.24818C11.6576 1.96265 14.4815 4.47641 15.4755 6.39481C15.3625 5.57894 15.0236 3.24158 14.0974 1.56574C16.1306 0.882172 18.3219 0.507313 20.6036 0.529363C31.628 0.595515 40.5289 9.32753 40.4837 20.0882ZM19.4515 8.88652C22.3431 6.96812 27.3357 5.90969 29.9789 9.92289C28.3749 0.749869 21.4395 6.01995 19.4515 8.88652ZM15.4303 17.5524C16.0402 16.8909 16.7406 16.2293 17.5538 15.634C21.1684 12.9218 25.1218 12.2382 26.4095 14.1345C26.9065 14.8622 26.9291 15.8765 26.5451 16.9791C27.8328 14.9063 28.2394 12.9879 27.4487 11.9295C26.1158 10.1654 21.9817 11.3782 18.209 14.6417C17.102 15.5458 16.1758 16.5601 15.4303 17.5524ZM9.12738 19.1841C10.9573 19.5149 12.9453 17.2437 13.5552 14.0684C14.1652 10.8931 13.1938 8.07065 11.3639 7.71784C9.53402 7.38708 7.54601 9.65829 6.93605 12.8336C6.32609 15.9868 7.2975 18.8313 9.12738 19.1841ZM34.5649 15.3473C17.0568 26.7916 4.97063 20.9923 4.97063 20.9923C4.7899 24.9614 11.7705 37.1553 20.084 37.3097C28.4201 37.464 34.5649 15.3473 34.5649 15.3473ZM7.43305 12.8997C7.99783 9.98905 9.71474 7.87219 11.2735 8.1809C12.8323 8.46756 13.6456 11.0695 13.1034 13.9802C12.5386 16.8909 10.8217 19.0077 9.26292 18.699C7.68155 18.4124 6.86827 15.8104 7.43305 12.8997ZM10.7539 15.3694C11.4543 15.5237 12.2223 14.6858 12.4934 13.5171C12.7645 12.3485 12.4031 11.268 11.7028 11.1357C11.2283 11.0254 10.7313 11.3782 10.3699 11.9736C10.6862 12.1279 10.8443 12.5249 10.6862 12.8556C10.5506 13.1643 10.2343 13.3187 9.91806 13.2525C9.78252 14.2889 10.1214 15.215 10.7539 15.3694Z" fill="#05BC52"/></svg>
                <button to="/" onClick={() => dispatch(setPopup({name: 'catalog', type: true}))} className="header__catalog">
                    <img src={catalog} alt="catalog" />
                    Каталог
                </button>
                <form className="header__search-form">
                    <img src={search} alt="search" />
                    <input placeholder="Я ищу..." type="text" />
                    <button type="submit" className="header__search-form__submit">Найти</button>
                </form>
                <div onClick={() => dispatch(setPopup({name: 'user', type: true}))} className="header__user">
                    <img src={user} alt="user" />
                </div>
                <div onClick={() => dispatch(setPopup({name: 'basket', type: true}))} className="header__shopping-basket">
                    <img src={basket} alt="basket" />
                    <div className="header__shopping-basket__counter">{inCart.length}</div>
                </div>
            </div>
            <BurgerPanel/>
            <Popup title="Каталог товаров" name="catalog" render={() => <Catalog/>}/>
            <Popup title="Вход" name="user" render={() => <Login/>}/>
            <Popup title="Регистрация" name="register" render={() => <Register/>} />
            <Popup title="Корзина" name="basket" render={() => <Basket/>}/>
        </header>
    )
}

export default Header;