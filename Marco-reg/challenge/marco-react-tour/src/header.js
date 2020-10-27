import React from 'react';
import './index.css'

function Header(){
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
    return(
       <div class="header">
           <div>
           <h1>Tour of Heroes</h1>
                <button id="buttons"><a>Dashboard</a></button>
                <button id="buttons"><a>Heroes</a></button>

           </div>
           <div id="main-four">
               <h3 className="title">Tour of Heroes</h3>
               <div className="buttons4">
                   {heroes.map((heroe,topFour)=>{
                       heroe=heroes.splice(4);
                   return <button className="topFourHeroes">{heroes[topFour].name}</button>
                   })}
                  
               </div>
           </div>
                
        </div>
        
            
        
    )
}
export default Header;