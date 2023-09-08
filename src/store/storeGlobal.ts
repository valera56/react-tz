import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import {ticketsApi} from "./services";
import {setupListeners} from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [ticketsApi.reducerPath] : ticketsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ticketsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
