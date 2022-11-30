import { configureStore } from "@reduxjs/toolkit";
import appReduce from "../App/appSlice";
import entranceReducer from "../Features/Entrance/entranceSlice";


export default configureStore({
    reducer:{
        app: appReduce,
        entrance: entranceReducer
    }
});