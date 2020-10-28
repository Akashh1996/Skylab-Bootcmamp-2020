import React from 'react';
import '../style.css'

function DashboardTopHero({heroName}) {
    return (
        <a class="top-heroes-buttons" href="../detail/detail.html?heroId=${hero.id}">{heroName}</a>
    )
}

export default DashboardTopHero;