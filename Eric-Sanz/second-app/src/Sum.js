import React from 'react';



// function Sum({a,b}) {
//     return (
//     <h1>{a} + {b} = {a + b}</h1>
//     )
// }

// function Sum(props) {
//     return (
//     <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
//     )
// }

class Sum extends React.Component {
    componentWillMount() {
        console.info('will mount'); //voy a pintar
    }

    componentDidMount() {
        console.info('did mount'); // ya pintado
    }

    render() { //pinto
        console.info('render');
        return (
            <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>
            )
    }
}

export default Sum;