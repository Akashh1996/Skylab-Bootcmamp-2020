import React from 'react';
import './DashboardList.css';
import { PropTypes } from 'prop-types';
import DashboardElement from './DashboardElement';

function DashboardList({ list }) {
  return (
    <ul id="dashboard-list">
      {list.map((element) => <DashboardElement name={element.name} />)}
    </ul>
  );
}

DashboardList.propTypes = {
  list: PropTypes.shape([]).isRequired,
};

export default DashboardList;
