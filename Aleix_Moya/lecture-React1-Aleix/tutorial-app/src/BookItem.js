import React from 'react';

function BookItem (props){
    return <button style={{marginBottom : '5px'}} onClick={()=>{
        if(props.title === "the adventures of Huckleberry Finn"){
            document.getElementById("Cosas").style.backgroundColor = 'blue';
         }
         else{
            document.getElementById("Cosas").style.backgroundColor = 'red';
         }

    }}>{props.title}</button>;
    
        
    
}

export default BookItem;
