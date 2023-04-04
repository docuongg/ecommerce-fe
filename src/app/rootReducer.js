import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/slice/authSlice'
import categoryReducer from '../features/slice/categorySlice'
import orderReducer from '../features/slice/orderSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  order: orderReducer
})  

export default rootReducer;