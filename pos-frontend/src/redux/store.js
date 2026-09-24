import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from './slice/CustomerSlice';

const store = configureStore({
    reducer: {
        customer: CustomerSlice
    },
    devTools: import.meta.env.NODE_ENV !== 'production'
});

export default store;