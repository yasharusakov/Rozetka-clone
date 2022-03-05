import { useState } from 'react';

function Price({setPrice}) {
    const [value, setValue] = useState(0);

    return (
        <>
            <input 
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
                min={0} 
                max={50000} 
                type="range" 
            /> 
            {
               value 
            }
            <button onClick={() => setPrice(value)} >set price</button>
        </>
    )
}

export default Price;