import Slider from '../Slider';
import Catalog from '../Catalog';

import './Content.scss';

function Content() {
    return (
        <div className="content">
            <div className="content__container">
                <Slider/>
                <Catalog/>
            </div>
        </div>
    )
}

export default Content;