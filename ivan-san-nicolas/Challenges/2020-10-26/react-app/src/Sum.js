import React from 'react';

class Sum extends React.Component {
    render() {
        return (
            <h1>
                La suma de {this.props.a} + {this.props.b} es igual a {this.props.a + this.props.b}
            </h1>
    
        );
    }
}

export default Sum;