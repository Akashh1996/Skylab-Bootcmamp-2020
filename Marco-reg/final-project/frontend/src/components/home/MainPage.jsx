import React from 'react';
import './home.css';
import RandomSpot from '../randomSpot/RandomSpot';

function MainPage() {
  return (
    <>
      <section id="top-part">

        <h1 id="title">SPOT SHOVE-IT</h1>
        <h4 id="sub-title">Find,create,skate</h4>

        <div id="random-spot">
          <p id="random_spot_text"> Go and check it out</p>

          <RandomSpot />
        </div>

      </section>

    </>
  );
}

export default MainPage;
