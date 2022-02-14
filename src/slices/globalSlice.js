import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catalog: false
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setCatalog: (state, action) => {
            state.catalog = action.payload;
        }
    }
});

export default globalSlice.reducer;

export const {
    setCatalog
} = globalSlice.actions;