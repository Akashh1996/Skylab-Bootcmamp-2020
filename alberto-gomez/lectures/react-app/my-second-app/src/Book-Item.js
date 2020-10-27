import React from "react";

function BookItem({ title }) {
  function checkAnswer() {
    if (title === "The Adventures of HuckleBerry Finn") {
      document.getElementById("main-content").style.backgroundColor = "green";
    } else {
      document.getElementById("main-content").style.backgroundColor = "red";
    }
  }

  return (
    <li className="listItem" onClick={checkAnswer}>
      {title}
    </li>
  );
}

export default BookItem;
