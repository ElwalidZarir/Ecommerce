import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCartTotalSelector = createSelector(
  (state: RootState) => state.carts.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, current) => {
        return accumulator + current;
      },
      0
    );
    console.log("ssl");
    return totalQuantity;
  }
);

export {getCartTotalSelector}
