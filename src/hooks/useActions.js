import {bindActionCreators} from 'redux'
import * as GlobalCreator from '../redux/slices/globalSlice'
import * as InCartCreators from '../redux/slices/inCartSlice'
import * as FilterCreators from '../redux/slices/filterSlice'
import * as ItemsCreators from '../redux/slices/itemsSlice'
import {useDispatch} from 'react-redux'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(
        {
            ...GlobalCreator,
            ...InCartCreators,
            ...FilterCreators,
            ...ItemsCreators
        },
        dispatch
    )
}