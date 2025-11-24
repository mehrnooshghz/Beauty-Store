import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    email: '',
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.email= action.payload.email;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const Index = state.products.findIndex(product => product.id === action.payload.id);
      
      if (Index !== -1) {
        state.quantity -=1
        state.total += state.products[Index].price * state.products[Index].quantity;
        state.products.splice(Index,1)
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart} = cartSlice.actions;
export default cartSlice.reducer;