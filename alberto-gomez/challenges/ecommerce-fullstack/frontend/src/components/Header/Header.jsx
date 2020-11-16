import React from 'react';
import './Header.css'

function Header() {
    return <>
    <header className="header__main-container">
    <div className="bike-shop-brand"><a href="/"><img src="https://trello-attachments.s3.amazonaws.com/5f80756680db59385bb364bf/5fb15f7f72894a5d8d6f977a/9991af98832bdc254939b36f423d4ef4/bici-logo.png" alt="bike-logo" className="bike-logo"/></a><h1>THE SPORTS 8-ITEM STORE</h1></div>
        <nav className="header__navigation-bar">
            <ul className="header__navigation-items">
                <a href="/components" id="components"><span class="material-icons">
storefront
</span><li className="header__navigation-item--anchor components">List of components</li></a>
                <a href="/shopping-cart" id="shopping-cart"><span className="material-icons">
shopping_cart
</span><li className="header__navigation-item--anchor shopping-cart">Shopping Cart</li></a>
            </ul>
        </nav>
        
    </header>
    </>
}

export default Header;