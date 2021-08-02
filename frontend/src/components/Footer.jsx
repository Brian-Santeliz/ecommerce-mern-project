import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center p-3'>
          <h6> Ecommerce {new Date().getFullYear()} &copy;</h6>
        </Col>
      </Row>
    </Container>
  );
};
