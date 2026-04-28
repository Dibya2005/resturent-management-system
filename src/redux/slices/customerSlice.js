import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    customerName: "",
    customerPhone: "",
    guests: 0,
    tableNo: "",
    orderId: ""
};
const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            const { name, phone, guests } = action.payload;
            state.customerName = name;
            state.customerPhone = phone;
            state.guests = guests;
            state.orderId = `${Date.now()} ${Math.floor(Math.random() * 1000)}`;
        },
        removeCustomer: (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.guests = 0;
            state.tableNo = "";
        },
        setTableNo: (state, action) => {
            state.tableNo = action.payload;
        }
    }
});
export const { setCustomer, removeCustomer, setTableNo } = customerSlice.actions;
export default customerSlice.reducer;