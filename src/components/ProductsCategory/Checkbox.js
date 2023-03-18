import {useEffect, useState} from 'react'
import checkmark from '../../assets/resources/svg/check-mark.svg'
import {useActions} from '../../hooks/useActions'

function Checkbox({brendName}) {
    const {setBrend, removeBrend} = useActions()
    const [checked, setChecked] = useState(false)

    let classNames = 'checkbox '

    if (checked) {
        classNames += 'checkbox-checked'
    } else {
        classNames += 'checkbox-unchecked'
    }

    const onCheck = () => {
        setChecked(checked => !checked)
    }

    useEffect(() => {
        if (checked) {
            setBrend(brendName)
        } else {
            removeBrend(brendName)
        }
    }, [checked])

    return (
        <div className={classNames} onClick={onCheck}>
            <div className="checkbox__box">
                <img src={checkmark} alt="checkmark"/>
            </div>
            <div className="checkbox__name">{brendName}</div>
        </div>
    )
}

export default Checkbox