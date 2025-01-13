import { createSlice } from "@reduxjs/toolkit";
import {thunkGetCategories} from "./thunk/thunkCategories";
import { TLoading } from "src/types/shared";
import { TCategory } from "src/types/category";

interface ICategoriesState {
  records: Array<TCategory>;
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(thunkGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(thunkGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message as string;
    });
  },
});

export default categoriesSlice.reducer;
