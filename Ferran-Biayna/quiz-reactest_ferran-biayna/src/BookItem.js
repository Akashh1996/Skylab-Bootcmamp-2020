import React from 'react';

function BookItem({answer}) {
   
    function click () {
        if (answer==="Macbeth") {
            document.getElementById('body-quiz').style.background = 'green'
        } else {
            document.getElementById('body-quiz').style.background = 'red'
        }
    }

    return <li onClick={click}>{answer}</li>
}

export default BookItem

