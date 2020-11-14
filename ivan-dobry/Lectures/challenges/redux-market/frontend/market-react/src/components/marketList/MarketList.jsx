/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
          <p>{product.name}</p>
          <img src={product.image} alt="" />
          <button type="submit">add to troley</button>
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
