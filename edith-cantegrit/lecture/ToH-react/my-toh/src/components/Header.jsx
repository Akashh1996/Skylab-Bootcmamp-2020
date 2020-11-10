import React from 'react';
import { Link } from 'react-router-dom';

const hero= {
    id: 12
};

function Header() {
    return (
        <>
         <h1>Tour of heroes</h1>
         <nav className="toh-navigation">
             <Link to="/dashboard">Dashboard</Link>
             {'|'} 
             <Link to="/heroes">Heroes</Link>
         </nav>
        </>
    );
}
 
export default Header;