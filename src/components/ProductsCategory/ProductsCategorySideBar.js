import { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Checkbox from './Checkbox';
import Price from './Price';

function ProductsCategorySideBar({productsID}) {
    const navigate = useNavigate();
    const [brend, setBrend] = useState([]);
    const [price, setPrice] = useState(0);

    const items = [
        {
            filterName: 'brend',
            filterType: 'apple',
            id: 123123132141
        },
        {
            filterName: 'brend',
            filterType: 'hp',
            id: 123123123123
        },
        {
            filterName: 'price',
            id: 123124141213131
        }
    ]

    useEffect(() => {
        let array = []

        if (brend.length !== 0) array.push('brend=' + brend.join(','));
        if (price !== 0) array.push('price=' + price);

        const url = array.length !== 0 ? `/${array.join(';')}` : '';

        const path = `/p/${productsID}${url}`;

        navigate(path);

    }, [brend, price])

    const elements = items.map(item => {
        return (
            <Fragment key={item.id}>
                {
                    item.filterName === 'brend' ? 
                    <Checkbox 
                        {...item} 
                        brend={brend} 
                        setBrend={setBrend} 
                    /> : null
                }
                {
                    item.filterName === 'price' ?
                    <Price
                        setPrice={setPrice}
                    /> : null
                }
            </Fragment>
        )
    })

    return (
        <div className="products-category__sidebar">
            <div className="products-category__sidebar__items">
                {elements}
            </div>
        </div>
    )
}

export default ProductsCategorySideBar;