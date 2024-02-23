import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer  from "./features/product.slice";

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;