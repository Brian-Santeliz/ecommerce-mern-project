import React from 'react';
import { Card } from 'react-bootstrap';
export const Product = (props) => {
  const { name, description, price, image, id } = props;
  return (
    <div>
      <Card className='my-2  p-2'>
        <a href={`/product/${id}`}>
          <Card.Img src={image} variant='top' />
        </a>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
