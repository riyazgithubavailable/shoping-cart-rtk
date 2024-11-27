import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./features/cartSlice";
import productReducer from "./features/producSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product:productReducer
    }
})
store.dispatch(getTotals())

export default store;