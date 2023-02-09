import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allUsers from "./reducers/allUsersSlice";

const rootReducer = combineReducers({
  allUsers,
});

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
