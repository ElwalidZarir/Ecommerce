import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse =Array< {id:number; title:string; prefix:string; img:string }>

const thunkGetCategories = createAsyncThunk(
  "categories/thunkGetCategories",
  async (__, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("http://localhost:5000/categories");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }else{
        return rejectWithValue("unexpected error")
      }
    }
  }
);

export default thunkGetCategories;
