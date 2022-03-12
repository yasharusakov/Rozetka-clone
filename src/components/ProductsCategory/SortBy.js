import { useDispatch } from "react-redux";

import { setSortBy } from "../../slices/filterSlice";

function SortBy() {
    const dispatch = useDispatch();

    return (
        <select defaultValue='from-expensive-to-cheap' onChange={(e) => dispatch(setSortBy(e.target.value))} >
            <option value="from-cheap-to-expensive">От дешевых к дорогим</option>
            <option value="from-expensive-to-cheap">От дорогих к дешевым</option>
        </select>
    )
}

export default SortBy;