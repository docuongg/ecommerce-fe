import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
    total: 0,
    amount: 0
  },
  reducers: {
    clearCart: (state, action) => {
      state.cart = []
      state.total = 0
      state.amount = 0
    },
    addProductToCart: (state, action) => {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      state.cart = JSON.stringify(tempCart) !== JSON.stringify(state.cart) ? tempCart : [ ...state.cart, action.payload ]
      state.amount = state.amount + 1
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload)
    },
    increase: (state, action) => {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      state.cart = tempCart
      state.amount = state.amount + 1
    },
    decrease: (state, action) => {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
      state.cart = tempCart
      state.amount = state.amount - 1
    },
    getTotals: (state, action) => {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
  
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
  
      state.total = total
      state.amount = amount
    },
    loading: (state, action) => {
      state.loading = true
    },
    displayItems: (state, action) => {
      state.cart = action.payload
      state.loading = false
    },
    toggleAmount: (state, action) => {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
      state.cart = tempCart
    }
  }
});

export const { addProductToCart, clearCart, remove, increase, decrease, getTotals, loading, displayItems, toggleAmount, amount } = cartSlice.actions;

export default cartSlice.reducer;