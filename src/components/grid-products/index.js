import { Container, Row, Col } from "react-bootstrap";
import Card from "../card";

import "./styles.scss";
const GridProducts = ({ products, addItem }) => {
  console.log(123, addItem);
  const renderProducts = () => {
    return products.map((product) => {
      return (
        <Col>
          <Card product={product} addItem={addItem} />
        </Col>
      );
    });
  };

  return (
    <>
      <div className="grid-products-wrapper">
        <Container fluid className="grid-products">
          <Row>{renderProducts()}</Row>
        </Container>
      </div>
    </>
  );
};

export default GridProducts;
