import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/carts/cartsSlice";
import { useEffect, useState } from "react";

const { product, productImg } = styles;
interface IProps {
  id: number;
  title: string;
  cat_prefx: string;
  img: string;
  price: number;
  max: number;
}

const Product = ({ id, title, max, img, price }: IProps) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.carts);

  console.log(items[id]);

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

  const remainingItems = max - (items[id] ?? 0);

  const addToCartHandler = () => {
    if (items[id] < max || !items[id]) {
      dispatch(addToCart(id));
      setIsDisabled(true);
    } else {
      alert(`No more ${title}`);
    }
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="img" />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <h6>Remaining: {remainingItems}</h6>
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
