/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/esm/Button';
import './Filters.css';
import { applyFilters, resetFilters } from '../../redux/actions/project-actions';

function Filters({ categories, dispatch }) {
  function applyFilterBtn(className) {
    const inputs = document.getElementsByClassName(className);
    const checkedInputsValues = Array.prototype.filter.call(inputs, (input) => input.checked)
      .map((checkedInput) => checkedInput.value);
    dispatch(applyFilters(checkedInputsValues));
  }

  function resetFiltersBtn(className) {
    const inputs = document.getElementsByClassName(className);
    Array.prototype.forEach.call(inputs, (input) => { input.checked = false; });
    dispatch(resetFilters());
  }

  return (
    <div className="filters-container">
      <span>Set one or more filters:</span>
      <ul className="my-3 filter-list">
        {categories?.length && categories.map((category) => (
          <li key={performance.now() * Math.random()}>
            <label htmlFor={`${category}`} className="filter-label">
              <input type="checkbox" value={category} className="filter-input" />
              {`     ${category}`}
            </label>
          </li>
        ))}
      </ul>
      <Button variant="dark" onClick={() => { applyFilterBtn('filter-input'); }} className="filter-btn">Apply filters</Button>
      <Button variant="dark" onClick={() => { resetFiltersBtn('filter-input'); }} className="filter-btn">Reset filters</Button>
    </div>
  );
}

Filters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  categories: undefined,
};

function mapStateToProps({ projectsReducer }) {
  return {
    categories: projectsReducer.categories,
  };
}

export default connect(mapStateToProps)(Filters);
