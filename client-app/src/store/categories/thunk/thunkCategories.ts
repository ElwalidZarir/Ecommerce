import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "src/types/category";

type TResponse = Array<TCategory>;

const thunkGetCategories = createAsyncThunk(
  "categories/thunkGetCategories",
  async (__, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5000/categories"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);

export { thunkGetCategories };
