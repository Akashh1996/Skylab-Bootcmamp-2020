import React from 'react';
import './Detail.css'

function Detail(){
    return <>
    <h2 id="detail-title">Magneta details! </h2>
    <section id="data">
        <div id="data__id">
            <p id="id__label">id:</p>
            <p id="id__value">15</p>
        </div>
        <div id="data__name">
            <p id="name__label">name:</p>
            <input id="name__value" value="Magneta"></input>
        </div>
        <button href="#" id="back-button">Back</button>
    </section>
    </>
}

export default Detail;