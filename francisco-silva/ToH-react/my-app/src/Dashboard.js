import React from "react"
import './index.css';
import Header from './Header';


function Dashboard() {

    let heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
        
];
   
    return (
        
      <div className="dashboard_wrapper">
        <Header/>
      <div className= "top_heroes">
          <h2 className="top_heroes_title">Top Heroes</h2>
          <div className="top_heroes_btn_wrapper"></div>
  
          {heroes.map((heroe, topFour) => {
              heroe = heroes.splice(4);
          return <button className="top_heroes_btn">{heroes[topFour].name}</button>
          })}
          
      </div>
      </div>

    );  

  }

export default Dashboard;
