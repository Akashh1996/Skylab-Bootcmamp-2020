import React from "react"
import './index.css';


function Detail() {

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
        
    
      <div className= "list_heroes">
    <h2 className="my_heroes_title">{heroes[4].name} details!</h2>
          <div className="hero_details_wrapper"></div>
    <p>id: {heroes[4].id}</p>
    <p>name: <input type="text" value = {heroes[4].name}/></p>
          
      </div>
  
    );  

  }

export default Detail;
