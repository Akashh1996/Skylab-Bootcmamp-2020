import React from 'react';
import PropTypes from 'prop-types';

function Sum({a, b}) {
    return (
        <h1>
            {a} + {b} = <button onClick={() => showAlert(a, b)}>?</button>
        </h1>
    );
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    showAlert: PropTypes.func.isRequired
};

export default Sum;