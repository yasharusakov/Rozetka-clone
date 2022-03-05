import { useEffect, useState } from 'react';

function Checkbox({filterType, filterName, setBrend, brend}) {
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
            const array = brend.slice();
            array.push(filterType);
            setBrend(array);
        } else {
            const array = brend.slice();
            const filtered = array.filter(item => item !== filterType);
            setBrend(filtered);
        }
    }, [checked])

    return (
        <div className={classNames} onClick={onCheck}>
            <h1>{filterType}</h1>
            <h1>{filterName}</h1>
        </div>
    )
}

export default Checkbox;