import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/carts/cartsSlice";
import { useEffect, useRef, useState } from "react";

const { product, productImg } = styles;
interface IProps {
  id: number;
  title: string;
  cat_prefx: string;
  img: string;
  price: number;
}

const Product = ({ id, title, cat_prefx, img, price }: IProps) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    
    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsDisabled(true)
  };

  console.log(isBtnDisabled);

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="img" />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button
        onClick={addToCartHandler}
        disabled={isBtnDisabled}
        variant="info"
        style={{ color: "white" }}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> ...Loading
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
