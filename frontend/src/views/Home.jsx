import React from 'react';
import products from '../data/product';
import { Container, Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
const Home = () => {
  return (
    <Container>
      <h1>Productos disponibles</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col lg={4} md={6} xl={3} sm={12}>
              <Product {...product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;
