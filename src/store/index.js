import { configureStore } from "@reduxjs/toolkit";

import globalSlice from '../slices/globalSlice';
import itemsSlice from '../slices/itemsSlice';
import filterSlice from '../slices/filterSlice';

const store = configureStore({
    reducer: {global: globalSlice, items: itemsSlice, filter: filterSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;