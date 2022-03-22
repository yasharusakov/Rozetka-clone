import { useDispatch } from "react-redux";

import { setSortBy } from "../../slices/filterSlice";

function SortBy() {
    const dispatch = useDispatch();

    return (
        <select defaultValue onChange={(e) => dispatch(setSortBy(e.target.value))} >
            <option value>-Выберите фильтр-</option>
            <option value="from-cheap-to-expensive">От дешевых к дорогим</option>
            <option value="from-expensive-to-cheap">От дорогих к дешевым</option>
        </select>
    )
}

export default SortBy;