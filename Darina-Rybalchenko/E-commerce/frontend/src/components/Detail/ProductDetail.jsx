/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { requestProductDetail } from '../../redux/actions/product-actions';

function ProductDetail({ match, product, dispatch }) {
  const [id] = useState(match.params.productId);
  useEffect(() => {
    if (id) {
      dispatch(requestProductDetail(+id));
    }
  }, [id, dispatch]);

  return (
    <>
      <main className="detail">
        <Image src={product && product['product-image-url']} rounded />
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{product && product['product-name']}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the cards content.
            </Card.Text>
            <Card.Text>
              Price:
              {product && product.price}
              €
            </Card.Text>
            <Button variant="secondary">Add to basket</Button>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    'product-name': PropTypes.string.isRequired,
    'product-image-url': PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

  }).isRequired,

  dispatch: PropTypes.shape({
    requestProductDetail: PropTypes.func.isRequired,
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

function mapStateToProps({ productReducer }) {
  debugger;
  return { product: productReducer.productId };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
