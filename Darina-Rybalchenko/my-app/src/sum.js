import React from 'react'

/* function Sum({ a, b }) {
    return (<h1> 
        {a} + {b} = { a + b}
        </h1>
    )
} */

class Sum extends React.Component {
    componentWillMount() {
        console.info('will mount')
    };
    componentDidlMount() {
        console.info('did mount')
    };
    render() {
        console.info('render')
        return (<h1>
            {this.props.a} + {this.props.b} = { this.props.a + this.props.b}
        </h1>
        )
    }
}




export default Sum