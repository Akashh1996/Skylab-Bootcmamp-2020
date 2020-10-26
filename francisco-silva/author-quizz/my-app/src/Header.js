import React from "react";

import BookList from "./BookList"
import './App.css';


function Header(){
    const books = [
        "The Shining",
        "The adventures of Huckleberry Finn",
        "Macbeth",
        "IT"
    ]; 
    const otraLista = [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",

    ]
        return(
            <>
            <div class="header">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
            <div class="main">
                <img alt="author"/>
                <BookList books={books}/>
                <BookList books={otraLista}/>
                <BookList books={[...otraLista, ...books]}/>
            </div>
            </>
        );
}


export default Header;