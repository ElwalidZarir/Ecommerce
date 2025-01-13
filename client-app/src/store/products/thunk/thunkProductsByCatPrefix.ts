import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const thunkGetProductsByCatPrefix = createAsyncThunk(
  "products/thunkGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    } 
  }
);

export default thunkGetProductsByCatPrefix;
