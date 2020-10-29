import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadPokemons } from '../../actions/poke-actions';
import pokeStore from '../../stores/poke-store';
import Header from '../header/Header';

function Aside() {

    const amount = 9;
    const [pokemons, setPokemons] = useState(pokeStore.slicePokemons(amount));

    function handleChange(){
        setPokemons(pokeStore.slicePokemons(amount));
    }

    useEffect(() => {
        pokeStore.addEventListener(handleChange);

        if (pokemons.length < 1) {
            loadPokemons();
        }

        return () => {pokeStore.removeEventListener(handleChange)}
    })

    return (<>
                <Header />
                 <br/>
                <div className="aside">
                    {((!pokemons || pokemons.length < 1) && <h1>There are no pokemons :/</h1>)}
                    {((pokemons && pokemons.length > 0) && pokemons.map((pokemon) => 
                        <p><Link to={`/pokemons/:${pokemon.id}`}>{pokemon.name}</Link></p>
                    ))}
                </div>
            </>
    )
}

export default Aside;