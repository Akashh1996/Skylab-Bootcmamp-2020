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
    <Card>
      <Card.Body>
        <Image src={basket && basket[0]['product-image-url']} rounded />
        <Card.Title>{basket && basket[0]['product-name']}</Card.Title>
        <Card.Text>
          Price:
          {basket && basket[0].price}
          €
        </Card.Text>
        <Button variant="secondary">Delete from basket</Button>
      </Card.Body>
    </Card>

  );
}
Basket.propTypes = {
  basket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    'product-name': PropTypes.string.isRequired,
    'product-image-url': PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

  }).isRequired,

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
  console.log(productReducer.basket);
  return { basket: productReducer.basket };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ requestBasket }, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
