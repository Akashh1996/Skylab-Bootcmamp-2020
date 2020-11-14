import React from 'react';
import heroStore from '../stores/hero-store';

function HeroDetails() {
    let hero = heroStore.getHeroDetail()
    
    return(
        
    <h1>{hero.name} HERO DETAILS</h1>
    )
};


export default HeroDetails;