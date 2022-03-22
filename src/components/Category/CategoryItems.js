import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import goodstub from '../../resources/svg/goods-stub.svg';

import observer from '../../utils/observer';

function CategoryItems({categoryID, items = []}) {

    useEffect(() => {
        observer();
    }, [items])

    const elements = items.map((item, index) => {
        const path = `/c/${categoryID}/${item.link}`;
        return (
            <div data-src={item.url} key={index} className="category__item element-animation">
                <div className="element-target">
                    <Link to={path}>
                        <img src={goodstub} alt={item.title} />
                    </Link>
                </div>
                <Link to={path} className="category__item-title">{item.title}</Link>
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