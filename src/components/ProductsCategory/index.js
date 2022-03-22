import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setPopup } from '../../slices/globalSlice';

import SortBy from './SortBy';
import ProductsCategorySideBar from './ProductsCategorySideBar';
import ProductsCategoryItems from './ProductsCategoryItems';

import './ProductsCategory.scss';

function ProductsCategory() {
    const {categoryID, productsID} = useParams();

    const dispatch = useDispatch();
    
    const items = useSelector(state => state.items.items);
    const [filters, setFilters] = useState({brend: [], price: {min: 0, max: 0}});

    const createFilters = () => {
        const brend = [...new Set(items.map(item => item.brend))];
        const price = items.map(item => item.comparedPrice);

        setFilters((filters) => ({
            ...filters,
            brend,
            price: {min: Math.min(...price), max: Math.max(...price)}
        }))
    }

    useEffect(() => {
        if (items.length > 0) createFilters();
    }, [items]);

    return (
        <div className="products-category">
            <div className="products-category__title">{productsID}</div>
            <div className="products-category__filters">
                <div onClick={() => dispatch(setPopup({name: 'filter', type: true}))} className="products-category__filters__filter">Фильтры</div>
                <SortBy/>
            </div>
            <div className="products-category__container">
                <ProductsCategorySideBar 
                    filters={filters} 
                    categoryID={categoryID} 
                    productsID={productsID}
                />
                <ProductsCategoryItems 
                    productsID={productsID}
                />
            </div>
        </div>
    )
}

export default ProductsCategory;