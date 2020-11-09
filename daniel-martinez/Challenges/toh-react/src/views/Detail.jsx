import React, { useState } from 'react';
import './Detail.css'

function Detail(){
    const [inputId, setInputId] = useState("12");
    const [inputName, setInputName] = useState("Magneta");
    return <>
    <h2 id="detail-title">Magneta details! </h2>
    <section id="data">
        <div id="data__id">
            <p id="id__label">id:</p>
            <input type="text" value={inputId} onChange={(event) => setInputId(event.target.value)}>
            </input>
        </div>
        <div id="data__name">
            <p id="name__label">name:</p>
            <input type="text" value={inputName} onChange={(event) => setInputName(event.target.value)}>
            </input>
        </div>
        <button href="#" id="back-button">Back</button>
    </section>
    </>
}

export default Detail;