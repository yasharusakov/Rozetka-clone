import Products from '../Products';

function ProductsCategoryItems({productsID, filtersData}) {
    return (
        <div className="products-category__items">
            <Products 
                    filterName="type" 
                    symbol="array-contains" 
                    filterType={productsID} 
                    limitProducts={false}
                    filtersData={filtersData}
                />
        </div>
    )
}

export default ProductsCategoryItems;