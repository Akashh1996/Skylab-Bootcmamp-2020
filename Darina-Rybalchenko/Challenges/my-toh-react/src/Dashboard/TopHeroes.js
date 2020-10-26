import React from 'react'
import HeroItem from './HeroItem'

function TopHeroes({ heroes }) {
    return <ul>
        {heroes.slice(1, 5).map((hero) => (
            <HeroItem heroName={hero.name} />
        ))}
    </ul>
}

export default TopHeroes

