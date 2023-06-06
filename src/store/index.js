import {configureStore } from '@reduxjs/toolkit';
import motoSlice from './moto'
import api from "./middleware/api";


export const store = configureStore({
    reducer:{
        moto: motoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
})