import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { thunkGetCategories } from "@store/categories/thunk/thunkCategories";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } =
    useAppSelector((state) => state.categories) || {};

  useEffect(() => {
    if (!records.length) {
      dispatch(thunkGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => {
            return <Category {...record} />;
          }}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
