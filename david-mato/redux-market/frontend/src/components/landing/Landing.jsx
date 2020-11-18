/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
// import '../style.css';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import dompurify from 'dompurify';
import { requestProducts, addToCart } from '../../redux/actions/productsActions';

function ProductsList({ products, actions }) {
  const sanitizer = dompurify.sanitize;

  return (
    <>
      <h1>e-Commerce</h1>
      <Link to="/cart">Cart</Link>
      {products && products.length && products.map((product) => (
        <Link to={{ pathname: `/detail/${product._id}`, query: { product } }} key={Date.now() + Math.random()}>
          <article className={product}>
            <img src={`${product['product-image-url']}`} alt="" />
            <p dangerouslySetInnerHTML={{
              __html: sanitizer(product['product-name']),
            }}
            />
            <p>
              {product.price}
              {' '}
              €
            </p>
            <button type="button" onClick={() => actions.addToCart(product)}>Add to cart</button>
          </article>
        </Link>
      ))}
    </>
  );
}

function mapStateToProps({ products }) {
  return {
    products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestProducts, addToCart }, dispatch),
  };
}

ProductsList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    requestProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
