import React from 'react';



    

class Sum extends React.Component{
    render(){
        console.info("render");
        return(
            <h1 class="add">{this.props.a} + {this.props.b}= {this.props.a+ this.props.b}</h1>
        );

    }
}
export default Sum;