import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from './slice/CustomerSlice';
import cartSlice from './slice/cartSlice';

const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        cart : cartSlice
    },
    devTools: import.meta.env.NODE_ENV !== 'production'
});

export default store;