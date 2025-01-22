import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/carts/cartsSlice";

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

  const addToCartHandler = ()=> {
    dispatch(addToCart(id))
  }

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="img" />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price}</h3>
      <Button onClick={addToCartHandler} variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
