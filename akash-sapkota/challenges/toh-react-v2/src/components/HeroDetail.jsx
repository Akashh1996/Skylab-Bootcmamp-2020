import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';
import { useParams } from "react-router-dom"
function HeroDetail() {
    let { heroId } = useParams()
    console.log(heroId);
    const [heroDetail, setHeroDetail] = useState(heroStore.getHeroDetail(heroId));
    useEffect(() => {
        heroStore.addEventListener(handleChange);
        if (!heroDetail || !heroDetail.length) {
            loadHeroes();
        }

        return () => {
            heroStore.removeEventListener(handleChange);
        };
    }, [heroDetail]);

    function handleChange() {
        setHeroDetail(heroStore.getHeroDetail());
    }

    return (
        <>
            {heroDetail &&
                heroDetail.length > 0 &&
                <div>
                    <h1>{heroDetail.name}</h1>
                    <p>{heroDetail.id}</p>
                </div>

            }
        </>
    );


}

export default HeroDetail





