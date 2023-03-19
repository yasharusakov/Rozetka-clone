import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'
import './style.scss'

function Popup({title, name, render}) {
    const {setPopup} = useActions()
    const popup = useSelector(state => state.global[name])

    let classNames = 'popup'

    if (popup) {
        classNames += ' show'
    } else {
        classNames += ' hide'
    }

    return (
        <div className={classNames}>
            <div onClick={(e) => {
                if (e.target.classList.contains('popup__container')) {
                    setPopup({name: name, type: false})
                }
            }} className="popup__container">
                <div className={name === 'login' || name === 'register' ? 'popup__content login-and-register' : 'popup__content default'}>
                    <div className="popup__control-panel">
                        <div className="popup__control-panel__title">{title}</div>
                        <div onClick={() => setPopup({name: name, type: false})} className="popup__control-panel__close">&#x2715;</div>
                    </div>
                    <div className="popup__main">
                        {render()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup