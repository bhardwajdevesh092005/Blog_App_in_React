import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSilce'
const store = configureStore({
    reducer: authSlice
});
export default store;