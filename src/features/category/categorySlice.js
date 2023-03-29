import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    productsByCategory: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProductsByCategory: (state, action) => {
      state.productsByCategory = action.payload;
    }
  },
});

export const { setCategories, setSelectedCategory, setProductsByCategory } = categorySlice.actions;

export default categorySlice.reducer;