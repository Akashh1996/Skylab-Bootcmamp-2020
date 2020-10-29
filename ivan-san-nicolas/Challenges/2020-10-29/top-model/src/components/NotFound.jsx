import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NotFound(props) {
    return (
        <>
            <h1>Page Not Found!</h1>
            <button type="button" onClick={() => props.history.push('/')}>Dashboard</button>
        </>
    );
}

NotFound.propTypes = {
    hsitory: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

export default NotFound;