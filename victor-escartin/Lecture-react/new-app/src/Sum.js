import React from 'react';

// function Sum(props) {
//         return (
//             <h1>
//                 {this.props.a}+{this.props.b}={this.props.a+this.props.b}
//             </h1>
//         );
// }

//Son lo mismo

class Sum extends React.Component {
    componentWillMount(){
        console.info('>>>>>>>>>>>will Mount') //antes de render
    }
    componentDidMount(){
        console.info('>>>>>>>>>>>did Mount') //despues de render
    }

    render(){
        console.info('>>>>>>>>>render'); //durante render
        
        return (
            <h1>
                {this.props.a}+{this.props.b}={this.props.a+this.props.b}
            </h1>
        );
    }
}

export default Sum;