import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import UserSlice from "./UserSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const rootReducer=combineReducers(
    {
        auth:UserSlice
    }
)
const persistConfig={
    key:'root',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const Store=configureStore(
    {
        reducer:persistedReducer,
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware(
            {
                serializableCheck:false
            }
        )
    }
)
export const persistor=persistStore(Store)
export default Store