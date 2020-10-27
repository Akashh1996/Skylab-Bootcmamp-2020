import React from "react";
import './App.css';



class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0}
    }

    render() {
        return <div class="clicks" onClick={() => {
            this.setState({clicks: this.state.clicks + 1})
        }}>This has been clicked {this.state.clicks} times
        </div>
    }
}


export default ClickCounter;