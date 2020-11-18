import React from 'react';
import heroes from '../Store/Store';
import '../TohStyles.css';
import DashboardTop from './DashboardTop';

function Dashboard() {
    return (
        <div className="top-heroes-container">
            <h2 className="top.heroes-title">Top Heroes</h2>
            <div id="top-heroes__list">
                {heroes.slice(1,5).map((hero) => <DashboardTop heroName={hero.name}/>)}
            </div>
        </div>
    )
}

export default Dashboard;

