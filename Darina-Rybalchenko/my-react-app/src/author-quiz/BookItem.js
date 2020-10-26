import React from 'react'
import './../author-quiz/BookItem.css'

function BookItem({ title }) {
    function click() {
        if (title === 'The adventures of Huckleberry Finn') {
            document.getElementById('main-content').style.backgroundColor = 'green';
        } else {
            document.getElementById('main-content').style.backgroundColor = 'red';
        }
    }
    return (
        <li onClick={click}>
            {title}
        </li>
    );
}

export default BookItem