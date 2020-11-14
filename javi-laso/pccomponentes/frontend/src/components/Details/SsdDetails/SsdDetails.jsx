import React from 'react';
import { PropTypes } from 'prop-types';

function SsdDetails({ item }) {
  return (
    <>
      <span>{`Capacity: ${item['capacity-gb']} GB`}</span>
    </>
  );
}

SsdDetails.propTypes = {
  item: PropTypes.shape({
    'capacity-gb': PropTypes.string,
  }).isRequired,
};

export default SsdDetails;
