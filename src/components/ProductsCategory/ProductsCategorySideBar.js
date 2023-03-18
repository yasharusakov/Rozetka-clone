import Checkbox from './Checkbox'

import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'

function ProductsCategorySideBar({filters}) {
    const {setPopup} = useActions()
    const filter = useSelector(state => state.global.filter)
    const brendElements = filters.brend.map((item, i) => <Checkbox key={i} brendName={item}/>)

    let classNames = 'products-category__sidebar'

    if (filter) {
        classNames += ' products-category__sidebar-show'
    } else {
        classNames += ' products-category__sidebar-hide'
    }

    return (
        <div onClick={(e) => {
            if (e.target.classList.contains('products-category__sidebar')) {
                setPopup({name: 'filter', type: false})
            }
        }} className={classNames}>
            <div className="products-category__sidebar__container">
                <div onClick={() => setPopup({name: 'filter', type: false})}
                     className="products-category__sidebar-close">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                    </svg>
                </div>
                <div className="products-category__sidebar__content">
                    <div className="products-category__sidebar__items">
                        <div className="products-category__sidebar__item-title">Бренды</div>
                        {brendElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCategorySideBar