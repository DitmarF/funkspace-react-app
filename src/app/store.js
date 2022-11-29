import { configureStore } from "@reduxjs/toolkit";
import entranceReducer from "../Features/Entrance/entranceSlice"

export default configureStore({
    reducer:{
        entrance: entranceReducer
    }
});