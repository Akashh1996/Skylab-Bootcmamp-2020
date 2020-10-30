import React, { useState, useEffect } from 'react';
import { loadHeroes, loadHeroById } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';


function HeroDetail(props) {
    
    const [heroId] = useState(null);
    const [hero, setHero] = useState(heroStore.getHeroById(props.match.params.heroId));

    function handleChange() {
        
    }

    useEffect(() => {
        heroStore.addEventListener(handleChange);
        if (heroId && !hero) {
            loadHeroById();
        }
    }, [heroId, hero]);
    
    return <>
        <h1>Hero Details</h1>
        <p>Id: {hero.id}</p>
        <p>Name {hero.name}</p>
        <p>Lastname: {hero.lastname}</p>
        <p>Super Power: {hero.superpower}</p>
        </>
}

export default HeroDetail;