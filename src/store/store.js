import { configureStore, createListenerMiddleware, isAnyOf, } from "@reduxjs/toolkit";
import product from "./reducer/product-reducer.js";
import { loadState, saveState } from "../config/storage.js";
import { addProduct, incrementPrice, decrementPrice, deleteProduct, summation } from "./reducer/product-reducer.js";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	matcher: isAnyOf(addProduct, incrementPrice, decrementPrice, deleteProduct),
	effect: (_, listenerApi) => {
		listenerApi.dispatch(summation());
	},
});

export const store = configureStore({
	reducer: {
		product,
	},
	preloadedState: {
		product: loadState("products"),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

store.subscribe(() => {
	saveState("product", store.getState().product);
});