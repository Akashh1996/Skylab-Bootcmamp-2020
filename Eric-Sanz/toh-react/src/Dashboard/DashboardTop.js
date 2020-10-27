import React from 'react';
import '../TohStyles.css';

function DashboardTop({heroName}) {
    return (
        <button className="top-btn">{heroName}</button>
    )
}

export default DashboardTop;