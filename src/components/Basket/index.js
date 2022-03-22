import basket from '../../resources/svg/basket.svg';

import './Basket.scss';

function Basket() {
    const items = [];

    return (
        <div className="basket">
            <div className="basket__container">
                {
                    items.length === 0 ? (
                        <div className="basket__nothing">
                            <img src={basket} alt="basket" />
                            <div className="basket__nothing__title">Корзина пуста</div>
                            <div className="basket__nothing__sub-title">Но это никогда не поздно исправить :)</div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Basket;