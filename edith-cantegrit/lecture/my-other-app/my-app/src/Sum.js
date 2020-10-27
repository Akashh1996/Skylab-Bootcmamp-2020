import React from 'react';
import PropTypes from 'prop-types';

function Sum({a, b, showAlert}) {
    function clickHandler(event) {
        showAlert(a, b);
    }
    return (
        <>
            {a} + {b} = <button onClick={clickHandler}>?</button>
            <button onClick={() => alert('otro boton')}>otro boton</button>
        </>
    );
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    showAlert: PropTypes.func.isRequired
};

export default Sum;