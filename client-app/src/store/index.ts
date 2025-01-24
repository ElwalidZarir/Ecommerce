import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import categories from "@store/categories/categoriesSlice";
import products from "@store/products/productsSlice";
import carts from "@store/carts/cartsSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["carts"]
}

const rootReducer = combineReducers( { categories, products, carts })

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store,persistor}
