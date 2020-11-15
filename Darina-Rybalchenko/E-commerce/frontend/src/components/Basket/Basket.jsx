import React from 'react';
import './Basket.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const product = {
  id: 1,
  'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
  'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
  'header-top-right-text': 'Shop All',
  'header-top-left-text': "Men's",
  'product-url': 'http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html',
  'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-mens/',
  price: 10,
};

function Basket() {
  return (
    <Card>
      <Card.Body>
        <Image src={product['product-image-url']} rounded />
        <Card.Title>{product['product-name']}</Card.Title>
        <Card.Text>
          Price:
          {product.price}
          €
        </Card.Text>
        <Button variant="secondary">Delete from basket</Button>
      </Card.Body>
    </Card>

  );
}

export default Basket;
