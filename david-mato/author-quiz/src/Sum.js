import React from 'react';
import Proptypes from 'prop-types';

function Sum({a, b}) {
return <h1>{a} + {b} = {a + b}</h1>
}

export default Sum;

// Sum.proptypes = {
//     a: Proptypes.number.isRequired,
//     b: Proptypes.number.isRequired
// }