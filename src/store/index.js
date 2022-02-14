import { configureStore } from "@reduxjs/toolkit";

import globalSlice from '../slices/globalSlice';

const store = configureStore({
    reducer: {global: globalSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;