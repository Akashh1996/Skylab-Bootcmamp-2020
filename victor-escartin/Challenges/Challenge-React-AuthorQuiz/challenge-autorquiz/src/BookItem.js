import React from 'react';

function BookItem(props) {
return <div onClick={() => {
    if (props.title === 'The adventures of Huckleberry Finn') {
        document.getElementById("backgroundResponse").style.backgroundColor = "green";
    } else {
        document.getElementById("backgroundResponse").style.backgroundColor = "red";
    }
}}class="list-item">{props.title}</div>
}

export default BookItem; 