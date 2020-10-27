import React from 'react';
import '../TohStyles.css';

function DashboardTop({heroName}) {
    return (
        <button className="top-hero">{heroName}</button>
    )
}

export default DashboardTop;