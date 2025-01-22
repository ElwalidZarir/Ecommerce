import React from "react";
import { Col, Row } from "react-bootstrap";

type TGridList<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
}

type THasId = {
  id?:number
}

const GridList = <T extends THasId> ({ records, renderItem }: TGridList<T>) => {
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
              {renderItem(record)}
            </Col>
          );
        })
      : "there are co categories";

  return <Row>{categoriesList}</Row>;
};

export default GridList;
