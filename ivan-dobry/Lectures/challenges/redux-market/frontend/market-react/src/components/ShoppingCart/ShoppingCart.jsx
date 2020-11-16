/* eslint-disable no-return-assign */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ShoppingCart.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { requestShoppingList, removeShoppingList } from '../../redux/actions/marketActions';

function ShoppingCart({ shoppingList, dispatch }) {
  debugger;
  if (!shoppingList && !shoppingList?.length) {
    dispatch(requestShoppingList());
  }
  let totalPrice = 0;
  shoppingList?.map((product) => totalPrice += product.price);
  return (
    <>
      <h1 className="title__section">Shopping Cart</h1>
      <section className="card__list">
        {shoppingList && shoppingList.map((product) => (
          <>
            <Card
              key={product.id}
              data-testid="card"
              className="m-3 product__card"
              style={{ width: '50vw' }}
              as={Link}
              to={`/detail/${product.id}`}
            >
              <p>{product.name}</p>
              <img src={product.image} alt="" />
              <span>
                price:
                {' '}
                {product.price}
                €
              </span>
            </Card>
            <Button className="remove__button" onClick={() => { removeShoppingList(product.id); dispatch(requestShoppingList()); }}>Remove from cart</Button>
          </>
        ))}
        <Badge variant="primary" className="total-price">
          <p className="price__text">
            Total price:
            {' '}
            <Badge variant="light">
              {totalPrice}
              {' '}
              €
            </Badge>
          </p>
        </Badge>
      </section>
    </>
  );
}

function mapStateToProps({ marketReducer }) {
  debugger;
  return {
    shoppingList: marketReducer.shoppingArray,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators({ requestShoppingList }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
