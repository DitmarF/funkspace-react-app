import { configureStore } from "@reduxjs/toolkit";
import appReduce from "../App/appSlice";
import entranceReducer from "../Features/Entrance/entranceSlice";
import serviceBot from "../Features/ServiceBot/serviceBotSlice"


export default configureStore({
    reducer:{
        app: appReduce,
        entrance: entranceReducer,
        serviceBot: serviceBot,
    }
});