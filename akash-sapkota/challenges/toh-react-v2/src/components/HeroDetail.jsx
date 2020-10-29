import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';
function HeroDetail(props) {
    const [heroId] = useState(+props.match.params.heroId)
    const [heroDetail, setHeroDetail] = useState(heroStore.getHeroDetail(heroId));
    useEffect(() => {
        heroStore.addEventListener(handleChange);

        if (!heroDetail || !heroDetail.length) {
            loadHeroes();
        }

        return () => {
            heroStore.removeEventListener(handleChange);
        };
    }, [heroDetail, heroId]);

    function handleChange() {
        setHeroDetail(heroStore.getHeroDetail(heroId));
    }

    return (
        <>
            {heroDetail &&

                <div>
                    <h1>{heroDetail.name}</h1>
                    <p>{heroDetail.id}</p>
                </div>

            }
        </>
    );


}

export default HeroDetail





