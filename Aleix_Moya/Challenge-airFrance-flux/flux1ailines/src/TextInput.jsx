import React, { useEffect, useState } from 'react';
import { loadHero, loadHero2, deleteHero } from './action-creators';
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
            <header class="titulos">
                <h2 id="title1">Reservar un Vuelo</h2>
                <h2 id="title2">Reservar un Vuelo con Millas</h2>
            </header>
            <div class="Vuelo">
                <p>
                    Vuelo:
                    <input
                        type="text"
                        value={id}
                        onChange = {(event) => handleChange(event, setId)}
                    />
                </p>
                <p>
                    Pasajero:
                    <input
                        type="text"
                        value={name}
                        onChange = {(event) => handleChange(event, setName)}
                    />
                </p>
                <p>
                    Clase:
                    <input
                        type="text"
                        value={lastname}
                        onChange = {(event) => handleChange(event, setLastName)}
                    />
                </p>
            </div>
            <div class="Vuelo">
            <p>
                Salida:
                <input
                    type="text"
                    value={salida}
                    onChange = {(event) => handleChange(event, setSalida)}
                />
            </p>
            <p>
                Llegada:
                <input
                    type="text"
                    value={llegada}
                    onChange = {(event) => handleChange(event, setLlegada)}
                />
            </p>  
            </div>
            
            <p>
                Fecha:
                <input
                    type="text"
                    value={fechas}
                    onChange = {(event) => handleChange(event, setFechas)}
                />
            </p>
            <div class="leButton">
                <button class="botonVuelos1"onClick={() => loadHero()}>
                    Option 1
                </button>
                <button class="botonVuelos2"onClick={() => loadHero2()}>
                    Option 2
                </button>
                <button class="botonVuelos"onClick={() => deleteHero()}>
                    Erase Input
                </button>
            </div>
            
        </>
    )
}

export default TextInput;