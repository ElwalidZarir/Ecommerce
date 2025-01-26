import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { getCartTotalSelector } from "@store/carts/cartsSlice";
import { useState, useEffect } from "react";
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

const HeaderBasket = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const totalQuantity = useAppSelector((state) => getCartTotalSelector(state));
  const quantityStyle = `${basketQuantity} ${
    isAnimated ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    setIsAnimated(true);

    const debounce = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={quantityStyle}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
