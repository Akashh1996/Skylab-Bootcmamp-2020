import React from 'react';
import '../TohStyles.css';

function DashboardTop({heroName}) {
    return (
        <a className="top-btn" href="../detail/detail.html?heroId=${hero.id}">{heroName}></a>
    )
}

export default DashboardTop;