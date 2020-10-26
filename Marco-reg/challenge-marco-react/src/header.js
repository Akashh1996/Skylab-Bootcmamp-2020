import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div class="header">
                <h1>
                    Author Quiz
                </h1>
                <p>Select the book written by the Author shown</p>
            </div>
        )
    }

}
export default Header;