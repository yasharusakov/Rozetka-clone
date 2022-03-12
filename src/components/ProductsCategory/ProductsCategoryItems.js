import Products from '../Products';

function ProductsCategoryItems({productsID}) {
    return (
        <div className="products-category__items">
            <Products 
                filterName="type" 
                symbol="array-contains" 
                filterType={productsID} 
                limitProducts={false}
                useSetItems={true}
            />
        </div>
    )
}

export default ProductsCategoryItems;