/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadProductList, addProductToCart } from '../redux/actions/productsActions';
import ListCreateProduct from './ListCreateProduct';

function ListProduct({ products, actions }) {
  debugger;
  useEffect(() => {
    debugger;
    if (products.length < 0) {
      actions.loadProductList();
      debugger;
    }
  }, []);
  return (
    <div>
      <h1>Asus Market</h1>
      <section>
        {products.length > 0 && products.map((product) => (
          <ListCreateProduct
            onAddToCartClicked={(data) => addProductToCart(data)}
            data={product}
            key={performance.now()}
          />
        ))}
      </section>
    </div>
  );
}

ListProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf),
  actions: PropTypes.shape({
    loadProductList: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired,
  }).isRequired,
};

ListProduct.defaultProps = {
  products: [],
};

function mapStateToProps({ productReducer }) {
  debugger;
  return {
    products: productReducer.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadProductList, addProductToCart }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
