import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import thunkGetProductsByCatPrefix from "@store/products/thunk/thunkProductsByCatPrefix";
import { useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } =
    useAppSelector((state) => state.products) || {};

    console.log(params);
    
  useEffect(() => {
    dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => {
            return <Product {...record} />;
          }}
        />
      </Loading>
    </Container>
  );
};

export default Products;
