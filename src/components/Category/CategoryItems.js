import { useEffect } from 'react';

import goodstub from '../../resources/svg/goods-stub.svg';

import observer from '../../utils/observer';

function CategoryItems({items = []}) {

    useEffect(() => {
        observer();
    }, [items])

    const elements = items.map(item => {
        return (
            <div data-src={item.url} key={item.id} className="category__item element-animation">
                <div className="element-target">
                    <img src={goodstub} alt={item.title} />
                </div>
                <a href="" className="category__item-title">{item.title}</a>
            </div>
        )
    })

    return (
        <div className="category__items">
            {elements}
        </div>
    )
}

export default CategoryItems;