/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import './Basket.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { requestBasket } from '../../redux/actions/product-actions';

function Basket({ basket, dispatch }) {
  useEffect(() => {
    dispatch.requestBasket();
  }, []);
  return (
    <main>
      <ul>
        {basket && basket.map((product) => (
          <li>

            <Card>
              <Card.Body>
                <Image src={product && product['product-image-url']} rounded />
                <Card.Title>{product && product['product-name']}</Card.Title>
                <Card.Text>
                  Price:
                  {product && product.price}
                  €
                </Card.Text>
                <Button variant="secondary">Delete from basket</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
Basket.propTypes = {
  basket: PropTypes.shape([
    {
      id: PropTypes.number.isRequired,
      'product-name': PropTypes.string.isRequired,
      'product-image-url': PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,

    },
  ]).isRequired,

  dispatch: PropTypes.shape({
    requestBasket: PropTypes.func.isRequired,
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

function mapStateToProps({ productReducer }) {
  return { basket: productReducer.basket };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ requestBasket }, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
