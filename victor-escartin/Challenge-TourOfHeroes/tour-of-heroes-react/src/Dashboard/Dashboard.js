import React from 'react';
import heroes from '../Store/store';
import DashboardTopHeroes from '../Dashboard/DashboardTopHeroes';
import '../Styles/dashboard.css'

function Dashboard() {  
    return (
        <main>
            <div className="subtitle">Top Heroes</div>
                <div className="boxes-topHeroes">
                    {heroes.slice(1, 5).map((hero) => <DashboardTopHeroes heroName={hero.name}/>)}
			    </div>
		</main>
    )
}

export default Dashboard; 