import React from 'react';
import './list.css'

function List(){
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
                    <ul className="list">
                        {heroes.slice(1,heroes.length).map((heroes)=>{
                            return <li className="topten">{heroes.name}<a className="id">{heroes.id}</a></li>
                        })}
                    </ul>
                
                  
               </div>
           </div>
                
        </div>
        
            
        
    )
}
export default List;