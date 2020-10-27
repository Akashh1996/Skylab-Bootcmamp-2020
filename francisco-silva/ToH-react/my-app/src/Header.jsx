import React from "react";
import './index.css';

function Header() {
       return (
        
    <div className="main">
      <div className="title__buttons">
        <h1 className="dashboard_title">Tour of Heroes</h1>
        <button className="dashboard_btn">Dashboard</button>
        <button className="heroes_btn">Heroes</button>
      </div>
    </div>
    );  

  }

export default Header;