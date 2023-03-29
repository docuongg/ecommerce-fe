import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/category/categorySlice'
import orderReducer from '../features/order/orderSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  order: orderReducer
})  

export default rootReducer;