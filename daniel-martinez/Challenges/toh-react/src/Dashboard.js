import React from 'react';
import './Dashboard.css'
import DashboardItem from './DashboardItem';

function Dashboard(){
    const heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
    return <section id="dashboard">
            <h2 id="dashboard__title">Top Heroes </h2>
<ul id="dashboard__ul">{heroes.slice(1,5).map(hero => {
    return DashboardItem(hero.name)
})}</ul>
        </section>
}

export default Dashboard;