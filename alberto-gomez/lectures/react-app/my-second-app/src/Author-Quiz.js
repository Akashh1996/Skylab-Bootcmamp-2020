import "./Author-Quiz.css";
import React from "react";
import BookList from "./Book-List";
import Header from "./Header";

function Authorquiz() {
  const books = [
    "The Shining",
    "The Adventures of HuckleBerry Finn",
    "Macbeth",
    "IT",
  ];

  return (
    <div>
      <Header />
      <main id="main-content">
        <img
          src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"
          alt="author"
        />
        <BookList books={books} />
      </main>
    </div>
  );
}

export default Authorquiz;
