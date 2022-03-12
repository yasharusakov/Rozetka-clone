import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setBrend, removeBrend } from '../../slices/filterSlice'

import checkmark from '../../resources/svg/check-mark.svg';

function Checkbox({brendName}) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    let classNames = 'checkbox ';

    if (checked) {
        classNames += 'checkbox-checked';
    } else {
        classNames += 'checkbox-unchecked'
    }

    const onCheck = () => {
        setChecked(checked => !checked);
    }

    useEffect(() => {
        if (checked) {
            dispatch(setBrend(brendName));
        } else {
            dispatch(removeBrend(brendName));
        }
    }, [checked]);

    return (
        <div className={classNames} onClick={onCheck}>
            <div className="checkbox__box">
                <img src={checkmark} alt="checkmark" />
            </div>
            <div className="checkbox__name">{brendName}</div>
        </div>
    )
}

export default Checkbox;