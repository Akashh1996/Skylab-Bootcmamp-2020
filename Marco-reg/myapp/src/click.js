import React from 'react';

class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={clicks:0};
    }
    render(){
        return(
            <div onClick={()=>{
                this.setState({clicks:this.state.clicks+1})
            }}>
                this Div has been Clicked{this.state.clicks} times
            </div>

            
                

        ) 
    }
}
export default ClickCounter;