import React from 'react';
import heroes from '../store/store';
// import DashboardTopHero from './DashboardTopHero';
import '../style.css'

function Detail() {  
    return (
        <>
            <div class="hero-characteristic">
				<span>Id: </span>
                <span id="hero-id__value">{heroes[0].id}</span>
			</div>
			<div class="hero-characteristic">
				<label
					><span>Name: </span>
					<input id="hero-name__input" placeholder="name" value={heroes[0].name}/>
				</label>
            </div>
        </> 
    )
}

export default Detail;