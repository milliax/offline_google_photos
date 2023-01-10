import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk"

import settingsReducer from "./reducers/settingsSlice"

const reducers = combineReducers({
    settings: settingsReducer,
})

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["page404"]
}

const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export type AppState = ReturnType<typeof reducers>;
// export type AppEpic = Epic<>