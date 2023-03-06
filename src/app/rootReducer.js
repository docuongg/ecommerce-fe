import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/category/categorySlice'

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
})  

export default rootReducer;