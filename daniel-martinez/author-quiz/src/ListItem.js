import React from 'react';
//import Block from './Block';
import './ListItem.css'

function ListItem({ title }){
    function isCorrect(){
        if (title==="The adventures of Huckleberry Finn"){
            document.getElementById("block").style.backgroundColor = "green";
            document.getElementById("button__continue").style.display = "block";
        } else {
            document.getElementById("block").style.backgroundColor = "red";
            document.getElementById("button__continue").style.display = "none";

        }
    }
return <li id="author-option" onClick={isCorrect}>{title}</li>
}

export default ListItem;