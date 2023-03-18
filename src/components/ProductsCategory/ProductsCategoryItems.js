import Products from '../Products'

function ProductsCategoryItems({productsID, useData, data}) {
    return (
        <div className="products-category__items">
            <Products
                filterName="type"
                symbol="array-contains"
                filterType={productsID}
                limitProducts={false}
                useSetItems={true}
                useData={useData}
                data={data}
            />
        </div>
    )
}

export default ProductsCategoryItems