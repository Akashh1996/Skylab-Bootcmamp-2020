import React from 'react';
import TopHeroes from './top-heroes/TopHeroes';
import './dashboard.css';
import Header from '../header/Header';

function Dashboard() {
    return <section class="dashboard">
        <Header />
        <TopHeroes />
    </section>
}

export default Dashboard;