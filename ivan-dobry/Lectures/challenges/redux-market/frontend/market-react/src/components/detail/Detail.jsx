/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import './Detail.css';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { requestProductDetail, addShoppingList } from '../../redux/actions/marketActions';

function DetailProduct({ match, detailProduct, dispatch }) {
  debugger;
  const { detailId } = match.params;
  if (!detailProduct || +detailId !== detailProduct?.id) {
    dispatch(requestProductDetail(detailId));
  }
  return (
    <>
      <h1 className="title__section">Details Page</h1>
      <section className="section__detail">
        <Card
          className="m-3 product__card"
          data-testid="card"
          style={{ width: '50vw' }}
        >
          <p>{detailProduct?.name}</p>
          <img src={detailProduct?.image} alt="" />
          <span>
            price:
            {' '}
            {detailProduct?.price}
            €
          </span>
        </Card>
        <Button className="add__button" type="submit" onClick={() => { addShoppingList(detailProduct.id); }}>add to cart</Button>
      </section>
    </>
  );
}

function mapStateToProps({ marketReducer }) {
  return {
    detailProduct: marketReducer.productDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestProductDetail }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
