import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "@store/categories/categoriesSlice";
import products from "@store/products/productsSlice";
import carts from "@store/carts/cartsSlice";

const cartPersistConfig = {
  key: "carts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  categories,
  products,
  carts: persistReducer(cartPersistConfig, carts),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
