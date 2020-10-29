import React from "react"
import { Link } from "react-router-dom"


function Header() {
    return (
        <>
            <h1>Tour of Heroes</h1>
            <nav className="toh-navigation">
                <Link to="/">DashBoard</Link>
                {"|"}
                <Link to="/heroes">Heroes</Link>

                {/* <Link to={`/heroes/${hero.id}`}>Narco Details</Link>
 */}
            </nav>
        </>

    );
}

export default Header;