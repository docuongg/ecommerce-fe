import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    selectedOrder: null,
    purchasedProducts: []
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    updateOrders: (state, action) => {
      const tempOrders = state.orders.map((order) => {
        if (order.id == action.payload.id) {
          return action.payload
        }

        return order
      })

      state.orders = tempOrders
    },
    delOrders: (state, action) => {
      const tempOrders = state.orders.filter((order) => order.id !== action.payload)

      state.orders = tempOrders
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    setPurchasedProducts: (state, action) => {
      state.productsOfOrder = action.payload;
    }
  },
});

export const { setOrders, updateOrders, delOrders, setSelectedOrder, setPurchasedProducts } = orderSlice.actions;

export default orderSlice.reducer;