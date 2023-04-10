import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    selectedProduct: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    delProducts: (state, action) => {
      const tempProducts = state.products.filter((product) => product.id !== action.payload)

      state.products = tempProducts
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    }
  },
});

export const { setProducts, delProducts, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;