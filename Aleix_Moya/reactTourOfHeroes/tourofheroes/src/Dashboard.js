import React from 'react';
import HeroeItem from './HeroeItem';

const heroes = [
    {id: 11, name: "Mr. Nice"},
    {id: 12, name: "Narco"},
    {id: 13, name: "Bombasto"},
    {id: 14, name: "Celeritas"},
    
]
function Dashboard(){
return (
    <div>
        <h1 id="toueHeroes">Tour of Heroes</h1>
        <div id="LowerPart">
            <h2 id="topHeroes">Top Heroes</h2>
            <div id="orden">
                {heroes.map((heroes) =>
                    <HeroeItem name = {heroes.name} key={heroes.name}/>,
                )}
            </div>
        </div>
    </div>
    
)
    
}
export default Dashboard;