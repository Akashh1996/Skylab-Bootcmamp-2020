import React from 'react';
import { PropTypes } from 'prop-types';

function MonitorDetails({ item }) {
  return (
    <>
      <span className="monitor__size">{`Screen size: ${item.inches}`}</span>
    </>
  );
}

MonitorDetails.propTypes = {
  item: PropTypes.shape({
    inches: PropTypes.string,
  }).isRequired,
};

export default MonitorDetails;
