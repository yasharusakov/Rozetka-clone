import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    choosedBrends: [],
    sortBy: 'from-expensive-to-cheap'
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrend: (state, action) => {
            state.choosedBrends.push(action.payload)
        },
        removeBrend: (state, action) => {
            state.choosedBrends = state.choosedBrends.filter(item => item !== action.payload);
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    }
});

export const filterByBrends = (items, filter) => {
    if (items.length === 0) return items;
    if (filter.choosedBrends.length === 0) return items;

    return items.filter(item => {
        if (filter.choosedBrends.some(el => el === item.brend)) {
            return true
        } else {
            return false
        }
    });
}

export const filterBySort = (items, filter) => {
    if (items.length === 0) return items;
    if (filter.sortBy === '') return items;

    return items.sort((a, b) => {
        if (filter.sortBy === 'from-cheap-to-expensive') {
            return a.comparedPrice < b.comparedPrice ? -1 : 1
        }
        if (filter.sortBy === 'from-expensive-to-cheap') {
            return a.comparedPrice > b.comparedPrice ? -1 : 1
        }
    })
}

export default filterSlice.reducer;

export const {
    setBrend,
    removeBrend,
    setSortBy
} = filterSlice.actions