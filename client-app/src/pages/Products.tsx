import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import thunkGetProductsByCatPrefix from "@store/products/thunk/thunkProductsByCatPrefix";
import { useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlice";
import { Loading } from "@components/feedback";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } =
    useAppSelector((state) => state.products) || {};

  useEffect(() => {
    dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  console.log(records);

  const ProductsList =
    records?.length > 0
      ? records.map((record) => {
          return (
            <Col
              xs={6}
              md={3}
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...record} />
            </Col>
          );
        })
      : "there are no products";

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>{ProductsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
