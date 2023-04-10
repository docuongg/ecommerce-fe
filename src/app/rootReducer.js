import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/slice/authSlice'
import categoryReducer from '../features/slice/categorySlice'
import orderReducer from '../features/slice/orderSlice'
import productReducer from "~/features/slice/productSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer
})  

export default rootReducer;