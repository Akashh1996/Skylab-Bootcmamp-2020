/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './ProductList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { requestProducts, requestProductDetail } from '../../redux/actions/product-actions';

function ProductList({ productsList, dispatch }) {
  if (!productsList && !productsList?.length) {
    dispatch(requestProducts());
  }
  return (
    <>
      <main>
        <ul className="list d-flex flex-sm-column align-items-center flex-md-row flex-md-wrap">
          {productsList && productsList.map((product) => (
            <li>
              {' '}
              <Card
                className="product-card"
                style={{ width: '18rem' }}
              >
                <Card.Img className="product-img" variant="top" src={product['product-image-url']} />
                <Card.Body>
                  <Card.Title
                    as={Link}
                    to={`/list/${product.id}`}
                    onClick={() => requestProductDetail(product.id)}
                    className="product-title"
                  >
                    {product['product-name']}

                  </Card.Title>
                  <Card.Text>Product details</Card.Text>
                  <Card.Text>
                    Price:
                    {product.price}
                    €
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/basket"
                    variant="secondary"
                  >
                    Add to basket

                  </Button>
                </Card.Body>
              </Card>

            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
ProductList.propTypes = {
  productsList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape([]).isRequired,

};

function mapStateToProps({ productReducer }) {
  debugger;
  return { productsList: productReducer.productsArray };
}

export default connect(mapStateToProps)(ProductList);
