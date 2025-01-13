import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "src/types/product";
import { TLoading } from "src/types/shared";
import thunkGetProductsByCatPrefix from "./thunk/thunkProductsByCatPrefix";

interface IProductsState {
  records: Array<TProduct>;
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(thunkGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(thunkGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
