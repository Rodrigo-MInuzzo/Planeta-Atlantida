import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootRecucer = combineReducers({});

export const persistedReducer = persistReducer(
    {
        key: "atlantida",
        storage: storage,
    },
    rootRecucer
);
