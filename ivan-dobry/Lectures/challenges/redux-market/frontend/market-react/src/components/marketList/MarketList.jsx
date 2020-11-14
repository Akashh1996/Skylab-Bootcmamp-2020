/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestProducts } from '../../redux/actions/marketActions';

// eslint-disable-next-line react/prop-types
function MarketList({ marketList, dispatch }) {
  debugger;
  if (!marketList && !marketList?.length) {
    dispatch(requestProducts());
  }
  return (
    <>
      {marketList && marketList.map((product) => (
        <>
          <Card
            key={product.name}
            data-testid="card"
            className="m-3"
            style={{ width: '50vw' }}
            as={Link}
            to={`/detail/${product.id}`}
          >
            <p>{product.name}</p>
            <img src={product.image} alt="" />
            <button type="submit">add to troley</button>
            <span>
              price:
              {' '}
              {product.price}
              €
            </span>
          </Card>
        </>
      ))}
      ;
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
