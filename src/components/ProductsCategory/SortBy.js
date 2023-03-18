import {useActions} from '../../hooks/useActions'

function SortBy() {
    const {setSortBy} = useActions()

    return (
        <select defaultValue onChange={(e) => setSortBy(e.target.value)}>
            <option value>-Выберите фильтр-</option>
            <option value="from-cheap-to-expensive">От дешевых к дорогим</option>
            <option value="from-expensive-to-cheap">От дорогих к дешевым</option>
        </select>
    )
}

export default SortBy