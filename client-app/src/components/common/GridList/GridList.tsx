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
  const itemsList =
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
      : "No Result";

  return <Row>{itemsList}</Row>;
};

export default GridList;
