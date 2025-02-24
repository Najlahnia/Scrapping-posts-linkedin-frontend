import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import scraperReducer from './scraperSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    scraper: scraperReducer,
  },
});

export default store;
