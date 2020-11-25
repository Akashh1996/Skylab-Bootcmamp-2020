import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { filterItems } from '../../../redux/actions/actions';
import './filter.css';

function Filter({ productTypes, actions }) {
  const [filter] = useState(null);

  function resetFilters(inputCollection) {
    Array.prototype.forEach.call(inputCollection, (input) => {
      const inputBtn = input;
      inputBtn.checked = false;
    });
    actions.filterItems(null);
  }
  return (
    <section className="filters">
      {productTypes?.map((type) => (
        <>
          <input
            type="radio"
            key={performance.now()}
            value={filter}
            id={type}
            className="filters__input mr-2"
            name="filter-types"
            onChange={(event) => {
              actions.filterItems(event.target.id);
              // setFilter(event.target.id);
            }}
          />
          <label htmlFor={type} className="filters__label mr-5">{type}</label>
        </>
      ))}
      {/* <button type="button" className="filters__button mr-3"
      onClick={() => { actions.filterItems(filter); }}>Apply filters</button> */}
      <button
        type="button"
        className="filters__button"
        onClick={() => {
          resetFilters(document.querySelectorAll('.filters__input'));
        }}
      >
        Reset filters

      </button>
    </section>
  );
}

Filter.propTypes = {
  productTypes: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.shape({
    filterItems: PropTypes.func.isRequired,
  }).isRequired,
};

Filter.defaultProps = {
  productTypes: undefined,
};

function mapStateToProps({ itemsReducer }) {
  return {
    items: itemsReducer.itemList,
    productTypes: itemsReducer.productTypes,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ filterItems }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
