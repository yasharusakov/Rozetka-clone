import Slider from '../Slider';
import Products from '../Products';

import './Content.scss';

function Content() {
    return (
        <div className="content">
            <div className="content__container">
                <Slider/>
                <Products/>
            </div>
        </div>
    )
}

export default Content;