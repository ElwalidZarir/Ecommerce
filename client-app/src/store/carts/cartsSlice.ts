import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "src/types/product";

interface ICartState {
  items: { [key: number]: number };
  productsFullInfos: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productsFullInfos: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if(state.items[id]){
        state.items[id]++;
      } else{
        state.items[id] = 1
      }
    },
  },
});

export const {addToCart} = cartsSlice.actions 
export default cartsSlice.reducer;
