import { createSlice } from "@reduxjs/toolkit";
import thunkGetCategories from "./thunk/thunkCategories";

interface ICategoriesState {
  records: Array<{ id: number; title: string; prefix: string; img: string }>;
  loading: "idle" | "pending" | "succeded" | "failed";
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
      state.loading = "succeded";
      state.records = action.payload;
    });
    builder.addCase(thunkGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string; 
    });
  },
});

export { thunkGetCategories };
export default categoriesSlice.reducer;
