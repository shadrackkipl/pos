import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderId: '',
    customerName: '',
    customerPhone: '',
    guests: 0,
    tableNo: ''
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            const {
                name,
                phone,
                customerName,
                customerPhone,
                guests = 0,
            } = action.payload || {};

            state.customerName = customerName ?? name ?? '';
            state.customerPhone = customerPhone ?? phone ?? '';
            state.guests = guests;
            state.orderId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        },

        removeCustomer: (state) => {
            state.customerName = '';
            state.customerPhone = '';
            state.guests = 0;
            state.tableNo = '';
            state.orderId = '';
        },

        updateTable: (state, action) => {
            state.tableNo = action.payload?.tableNo ?? action.payload?.table ?? '';
        }
    }
});

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;