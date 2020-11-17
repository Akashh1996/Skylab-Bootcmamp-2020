import React, { useEffect, useState } from 'react';
import { loadHero, deleteHero } from './action-creators';
import heroStore from './hero-store';

function TextInput(){
    const [hero, setHero] = useState(heroStore.getHero());
    const [id, setId] = useState(hero?.id);
    const [name, setName] = useState(hero?.name);
    const [lastname, setLastName] = useState(hero?.lastname);
    const [salida, setSalida] = useState(hero?.salida);
    const [llegada, setLlegada] = useState(hero?.llegada);
    const [fechas, setFechas] = useState(hero?.fechas);
    const [flag, setFlag] = useState(false);
 
    useEffect(() =>{
        heroStore.addEventListener(onChange);
        if (!hero && !flag){
            loadHero();
            setFlag(true);
        }   
        return () =>{
            heroStore.removeEventListener(onChange);
        };
    }, [hero, flag]);
    function onChange (){
        debugger;
        const hero = heroStore.getHero();
        setHero(hero);
        setId(hero?.id || "");
        setName(hero?.name || "");
        setLastName(hero?.lastname || "");
        setSalida(hero?.salida || "");
        setLlegada(hero?.llegada || "");
        setFechas(hero?.fechas || "");
    }
    function handleChange(event, setValue){
        setValue(event.target.value);
    }
    return(
        <>
            <p>
                id:
                <input
                    type="text"
                    value={id}
                    onChange = {(event) => handleChange(event, setId)}
                />
            </p>
            <p>
                name:
                <input
                    type="text"
                    value={name}
                    onChange = {(event) => handleChange(event, setName)}
                />
            </p>
            <p>
                last name:
                <input
                    type="text"
                    value={lastname}
                    onChange = {(event) => handleChange(event, setLastName)}
                />
            </p>
            <p>
                salida:
                <input
                    type="text"
                    value={salida}
                    onChange = {(event) => handleChange(event, setSalida)}
                />
            </p>
            <p>
                llegada:
                <input
                    type="text"
                    value={llegada}
                    onChange = {(event) => handleChange(event, setLlegada)}
                />
            </p>
            <p>
                fecha:
                <input
                    type="text"
                    value={fechas}
                    onChange = {(event) => handleChange(event, setFechas)}
                />
            </p>
            <button onClick={() => deleteHero()}>
                Delete Hero
            </button>
        </>
    )
}

export default TextInput;