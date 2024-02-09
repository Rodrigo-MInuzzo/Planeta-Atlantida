import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import atracoesSlice from "../modules/atracoes.slice";

export const rootRecucer = combineReducers({
    atracoes: atracoesSlice,
});

export const persistedReducer = persistReducer(
    {
        key: "atlantida",
        storage: storage,
    },
    rootRecucer
);
