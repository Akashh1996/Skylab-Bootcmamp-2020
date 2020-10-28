import React, { useState, useEffect } from 'react';
import { loadOptions } from './actions/action-creators';
import optionStore from './stores/options-store';


function Select() {
    const [option, setOption] = useState(optionStore.getHero());

    useEffect(() => {
        optionStore.addEventListener(onChange);
        if (!optionStore) {
            loadOptions();
        }

        return () => {
            optionStore.removeEventListener(onChange);
        };
    }, [hero]);

    function onChange() {
        const hero = heroStore.getHero();
        setHero(hero);
        setId(hero?.id);
        setName(hero?.name);
        setLastName(hero?.lastname);
    }

    function handleChange(event, setValue) {
        setValue(event.target.value);
    }

    return (
        <>
            <p>
                id:
                    <input
                    type="text"
                    value={id}
                    onChange={(event) => handleChange(event, setId)}
                />
            </p>
            <p>
                name:
                    <input
                    type="text"
                    value={name}
                    onChange={(event) => handleChange(event, setName)}
                />
            </p>
            <p>
                name:
                    <input
                    type="text"
                    value={lastname}
                    onChange={(event) => handleChange(event, setLastName)}
                />
            </p>
        </>
    );
}




export default Select;
