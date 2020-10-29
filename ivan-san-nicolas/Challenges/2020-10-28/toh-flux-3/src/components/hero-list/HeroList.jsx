import React, { useState, useEffect } from 'react';
import dispatcher from '../../dispatcher/dispatcher';


function HeroList(props) {
    const [heroes, setHeroes] = useState();

    useEffect(() => {
        if (!heroes) {
            loadHeroes();
        }
    })

    return <ul></ul>
}

export default HeroList;