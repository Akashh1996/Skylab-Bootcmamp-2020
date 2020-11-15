import React from 'react';
import './LoadingGif.css'

export default function LoadingGif() {
    const loadingGif = {
        url: "https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/9c2334900c729b99361b5a18d1c742bd/oie_14185311GwjOnih4.gif",
        alt:"loading-gif"
    }
    return(
        <div className="sabersList-loading-screen">
            <h1>Loading...</h1>
            <img src={loadingGif.url}
            alt={loadingGif.alt}
            className="loading-gif"/>
        </div>
    )
}