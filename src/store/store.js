import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer/counter-reducer.js"
import userReducer from "./reducer/user-reducer.js";
import { loadState, saveState } from "../storage/storage.js";

const persistedState = loadState("user");

export const store = configureStore({
	reducer: {
		counter,
		userReducer,
	},
	preloadedState: persistedState
		? { userReducer: persistedState }
		: undefined,
});

store.subscribe(() => {
	saveState("user", store.getState().userReducer);
});