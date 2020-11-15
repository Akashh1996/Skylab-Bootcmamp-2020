import React from 'react';
import { PropTypes } from 'prop-types';

function RamDetails({ item }) {
  return (
    <>
      <span>{`Mhz: ${item.mhz}`}</span>
      <span className="ram__capacity">{`Capacity: ${item['capacity-gb']} GB`}</span>
    </>
  );
}

RamDetails.propTypes = {
  item: PropTypes.shape({
    mhz: PropTypes.string,
    'capacity-gb': PropTypes.string,
  }).isRequired,
};

export default RamDetails;
