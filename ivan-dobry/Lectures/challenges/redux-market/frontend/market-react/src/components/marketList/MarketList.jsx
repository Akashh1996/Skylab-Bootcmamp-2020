/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';
import './MarketList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestProducts, addShoppingList } from '../../redux/actions/marketActions';

// eslint-disable-next-line react/prop-types
function MarketList({ marketList, dispatch }) {
  debugger;
  if (!marketList && !marketList?.length) {
    dispatch(requestProducts());
  }
  return (
    <>
      <section className="card__list">
        {marketList && marketList.map((product) => (
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
            <Button type="submit" className="add__button" onClick={() => { addShoppingList(product.id); }}>add to cart</Button>
          </>
        ))}
      </section>
    </>
  );
}

function mapStateToProps({ marketReducer }) {
  debugger;
  return {
    marketList: marketReducer.productArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestProducts }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);
