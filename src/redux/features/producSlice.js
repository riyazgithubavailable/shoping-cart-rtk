import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS =  Object.freeze({
    IDLE : 'idle',
    ERRO :'erro',
    LOADING: 'loading',
    
});

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status: STATUS.IDLE,

    },
    // reducers: {
    //     setProduct(state, action) {
    //         state.data = action.payload;
    //     },
    //     removeProduct(state, action) {
    //        return state.filter((item) => item.id !== action.payload)

    //     }
    // }
    extraReducers: (builder) => {
        builder
       .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.LOADING;
       })
       .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
        })
       .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERRO;
       })
    }
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;

// export const  fetchProducts = createAsyncThunk('products/fetch',async()=>{
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
// })
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; // Axios automatically parses the JSON response
});