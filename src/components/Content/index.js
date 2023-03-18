import MainSlider from '../MainSlider'
import Products from '../Products'

import './style.scss'

function Content() {
    return (
        <div className="content">
            <div className="content__container">
                <MainSlider/>
                <Products
                    header="Акционные предложения"
                    filterName="categoryType"
                    symbol="=="
                    filterType="promotionalOffers"
                    limitProducts={5}
                />
            </div>
        </div>
    )
}

export default Content