import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/slice/authSlice'
import categoryReducer from '../features/slice/categorySlice'
import cartReducer from '../features/slice/cartSlice'
import productReducer from "~/features/slice/productSlice"
import orderReducer from "~/features/slice/orderSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  cart: cartReducer,
  product: productReducer,
  order: orderReducer
})  

export default rootReducer;