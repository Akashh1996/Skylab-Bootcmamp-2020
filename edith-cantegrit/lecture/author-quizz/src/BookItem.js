import React from 'react';

function BookItem({title}) {
    function handleClick(e) {
        e.preventDefault();
        console.log("changeColor")

    }
    
    return (
        <button type="button" class="list-group-item" onClick={handleClick}>{title}</button>
    );
}

export default BookItem; 
