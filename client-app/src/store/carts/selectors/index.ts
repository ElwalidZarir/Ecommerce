import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCartTotalSelector = createSelector(
  (state: RootState) => state.carts.items,
  (items) => {
    console.log("rendered ");
    const totalQuantity = Object.values(items).reduce(
      (accumulator, current) => {
        return accumulator + current;
      },
      0
    );
    return totalQuantity;
  }
);

export { getCartTotalSelector };
