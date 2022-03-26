import './Loader.scss';

function Loader() {
    return (
        <div className="lds-ring-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;