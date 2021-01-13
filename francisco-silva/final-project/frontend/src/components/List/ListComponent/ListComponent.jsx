/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cart from '../Cart/Cart';

import { requestProducts, filterProductsBytype, resetFilters } from '../../../redux/actions/productAction';
import CardComponent from '../../Detail/CardComponent/CardComponent';
import './ListComponent.css';

function ListComponent({ productList, dispatch }) {
  useEffect(() => {
    if (!productList || !productList?.length) {
      dispatch(requestProducts());
    }
  }, [productList, dispatch]);

  const [checkbox, setCheckbox] = useState(false);

  function isChecked(typeOfProduct) {
    if (checkbox === false) {
      dispatch(filterProductsBytype(typeOfProduct));
    } else if ((checkbox === true)) {
      dispatch(resetFilters());
    }
  }

  return (
    <>

      <main className="filter-list-cart_wrapper">

        <section className="list--wrapper">

          {productList && productList.length
      && productList.map((product) => (
        <div className="list--items">
          <CardComponent productDetail={product} />
        </div>

      ))}
        </section>
        <div className="filter--cart_wrapper">
          <div className="filter_wrapper">
            <div className="order">
              <h2 className="order--filter">Filtros</h2>

            </div>
            <div className="radio_wrapper">

              <div className="slider_wrapper">
                <label className="switch" htmlFor="vegano">
                  <input onClick={() => { isChecked('Vegano'); setCheckbox(!checkbox); }} type="checkbox" id="vegano" />
                  <span className="slider round" />
                </label>
                <p className="slider-txt">Vegano</p>
              </div>
              <div className="slider_wrapper">
                <label className="switch" htmlFor="lactose">
                  <input onClick={() => { isChecked('Sem Lactose'); setCheckbox(!checkbox); }} type="checkbox" id="lactose" />
                  <span className="slider round" />
                </label>
                <p className="slider-txt">Sem Lactose</p>
              </div>
              <div className="slider_wrapper">
                <label className="switch" htmlFor="gluten">
                  <input onClick={() => { isChecked('Sem glúten'); setCheckbox(!checkbox); }} type="checkbox" id="gluten" />
                  <span className="slider round" />
                </label>
                <p className="slider-txt">Sem Glúten</p>
              </div>
              <div className="slider_wrapper">
                <label className="switch" htmlFor="açucar">
                  <input onClick={() => { isChecked('Sem açúcar'); setCheckbox(!checkbox); }} type="checkbox" id="açucar" />
                  <span className="slider round" />
                </label>
                <p className="slider-txt">Sem Açúcar</p>
              </div>
            </div>
          </div>
          <Cart />
        </div>
      </main>
    </>
  );
}

function mapStateToProps({ productsReducers }) {
  return {
    productList: productsReducers.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
