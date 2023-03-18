import {createSlice} from '@reduxjs/toolkit'

import scroll from '../../utils/scroll'

const initialState = {
    burgerPanel: false,
    catalog: false,
    basket: false,
    login: false,
    register: false,
    filter: false
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            state[action.payload.name] = action.payload.type
            scroll(action.payload.type)
        }
    }
})

export default globalSlice.reducer

export const {
    setPopup
} = globalSlice.actions