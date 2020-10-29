import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import pokeStore from '../../stores/poke-store';
import { loadPokemons } from '../../actions/poke-actions';
import Header from '../header/Header';

function Dashboard() {

    const amount = 4;
    const [pokemons, setPokemons] = useState(pokeStore.slicePokemons(amount));

    function handleChange() {
        setPokemons(pokeStore.slicePokemons(amount));
    }

    useEffect(() => {
        pokeStore.addEventListener(handleChange);

        if (pokemons.length < 1) {
            loadPokemons();
        }

        return () => {pokeStore.removeEventListener(handleChange)}
    })


    return<>
            <Header />
            <br/>
            <div class="dashboard">
                {(!pokemons || pokemons.length < 1) && <h1>There are no Pokemons :/</h1>}
                {(pokemons.length > 0) && pokemons.map((pokemon) => <p><Link to={`/pokemons/:${pokemon.id}`}>{pokemon.name}</Link></p>)}
            </div>
        </>
}

export default Dashboard;