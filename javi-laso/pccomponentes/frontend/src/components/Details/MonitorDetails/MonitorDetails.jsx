import React from 'react';
import { PropTypes } from 'prop-types';

function MonitorDetails({ item }) {
  return (
    <>
      <span>{`Screen size: ${item.inches}`}</span>
    </>
  );
}

MonitorDetails.propTypes = {
  item: PropTypes.shape({
    inches: PropTypes.string,
  }).isRequired,
};

export default MonitorDetails;
