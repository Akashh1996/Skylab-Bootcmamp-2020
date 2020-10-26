import React from 'react';
import '../Styles/dashboard.css'

function DashboardTopHeroes({heroName}) {
    return (
        <a className="btn-topHeroe" href="../detail/detail.html?heroId=${hero.id}">{heroName}</a>
    )
}

export default DashboardTopHeroes;