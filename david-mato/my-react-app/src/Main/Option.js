import React from 'react';
import './Option.css';
import './Main.css';

function Option({title}) {
    function rightOrWrong() {
        if (title === 'The Adventures of Huckleberry Finn') {
            document.getElementById('author-and-options').style.backgroundColor = 'green';
            document.getElementById('continue-button').style.visibility = 'visible';
        } else {
            document.getElementById('author-and-options').style.backgroundColor = 'red';
            document.getElementById('continue-button').style.visibility = 'hidden';
        }
    }
    return <button className='book-option' onClick={() => rightOrWrong()}>{title}</button>
}

export default Option;
