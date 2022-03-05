import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductsCategorySideBar from './ProductsCategorySideBar';
import ProductsCategoryItems from './ProductsCategoryItems';

import './ProductsCategory.scss';

function ProductsCategory() {
    const {productsID, filters} = useParams();
    const [filtersData, setFiltersData] = useState();

    useEffect(() => {
        if (filters) {
            const data = filters
                            .split(';')
                            .map(item => item.split('='))
                            .map(item => (
                                    {
                                        [item[0]]: [...item[1].split(',')]
                                    }
                                )
                            );

            setFiltersData(Object.assign({}, ...data))
        }
    }, [filters])

    return (
        <div className="products-category">
            <div className="products-category__title"></div>
            <div className="products-category__container">
                <ProductsCategorySideBar productsID={productsID}/>
                <ProductsCategoryItems filtersData={filtersData} productsID={productsID}/>
            </div>
        </div>
    )
}

export default ProductsCategory;