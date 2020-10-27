import React from 'react';
import PropTypes from 'prop-types';

function Sum ({ a, b }){
    return (
        <h1>
            {a} + {b} = {a+b}
        </h1>
    )
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
}

export default Sum;