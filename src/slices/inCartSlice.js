import { createSlice } from '@reduxjs/toolkit';

import Cookies from '../utils/cookies';

const cookies = new Cookies();

const initialState = {
   inCart: [] 
};

const inCartSlice = createSlice({
    name: 'inCart',
    initialState,
    reducers: {
        setAllToCart(state) {
            const products = cookies.getItem('products');
            if (products) state.inCart = products.split(',');
        },
        addToCart(state, action) {
            state.inCart.unshift(action.payload);
            cookies.addProduct(action.payload);
        }
    }
});

export default inCartSlice.reducer;

export const {
    setAllToCart,
    addToCart
} = inCartSlice.actions