import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { thunkGetCategories } from "@store/categories/thunk/thunkCategories";
import { useEffect } from "react";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } =
    useAppSelector((state) => state.categories) || {};
  console.log(records);

  useEffect(() => {
    if (!records.length) {
      dispatch(thunkGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList =
    records?.length > 0
      ? records.map((record) => {
          return (
            <Col
              xs={6}
              md={3}
              key={record.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...record} />
            </Col>
          );
        })
      : "there are co categories";

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
