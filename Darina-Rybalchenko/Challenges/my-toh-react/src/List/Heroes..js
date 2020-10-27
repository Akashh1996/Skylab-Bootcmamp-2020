import React from 'react'
import HeroListItem from './../List/HeroListItem'

function Heroes({ heroes }) {
    return <ul>
        {heroes.map((hero) => (
            <HeroListItem heroName={hero.name} />
        ))}
    </ul>
}

export default Heroes
