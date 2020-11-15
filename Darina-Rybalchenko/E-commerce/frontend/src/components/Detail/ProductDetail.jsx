import React from 'react';
import './ProductDetail.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const productDetail = {
  id: 1,
  'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
  'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
  'header-top-right-text': 'Shop All',
  'header-top-left-text': "Men's",
  'product-url': 'http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html',
  'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-mens/',
  price: 10,
};
function ProductDetail() {
  return (
    <>
      <main className="detail">
        <Image src={productDetail['product-image-url']} rounded />
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{productDetail['product-name']}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the cards content.
            </Card.Text>
            <Card.Text>
              Price:
              {productDetail.price}
              €
            </Card.Text>
            <Button variant="primary">Add to basket</Button>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}

export default ProductDetail;
