import React from 'react';
import HeroeItem from './HeroeItem';

const heroes = [
    {id: 11, name: "Mr. Nice"},
    {id: 12, name: "Narco"},
    {id: 13, name: "Bombasto"},
    {id: 14, name: "Celeritas"},
    {id: 15, name: "Magneta"},
    {id: 16, name: "RubberMan"},
    {id: 17, name: "Dynama"},
    {id: 18, name: "Dr IQ"},
    {id: 19, name: "Magma"},
    {id: 20, name: "Tornado"},
]
function List(){
    return (
        <div>
            <h1 id="toueHeroes">Tour of Heroes</h1>
            <div id="LowerPart">
                <h2 id="topHeroes">Top Heroes</h2>
                <ol>
                    {heroes.map((heroes) =>
                        <HeroeItem name = {heroes.name} key={heroes.name}/>,
                    )}
                </ol>
            </div>
        </div>
        
    )
        
}
export default List;