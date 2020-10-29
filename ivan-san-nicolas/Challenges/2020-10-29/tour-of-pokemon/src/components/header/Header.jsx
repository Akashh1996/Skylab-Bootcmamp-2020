import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (<div>
        <p><Link to="/">Dashboard</Link></p><p><Link to="/aside">Aside</Link></p>
    </div>
    )
}

export default Header;