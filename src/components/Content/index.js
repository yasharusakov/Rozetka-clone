import MainSlider from '../MainSlider';
import Products from '../Products';

import './Content.scss';

function Content() {
    return (
        <div className="content">
            <div className="content__container">
                <MainSlider/>
                <Products/>
            </div>
        </div>
    )
}

export default Content;