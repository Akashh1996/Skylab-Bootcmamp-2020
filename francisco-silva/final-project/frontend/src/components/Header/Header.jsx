import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import loginUserWithGoogle from '../../redux/actions/loginUserWithGoogle';

function Header() {
  // function handleLoginClick() {
  //   dispatch(loginUserWithGoogle());
  // }
  return (
    <>
      <header className="header_wrapper">
        <span className="burger-menu material-icons">
          menu
        </span>
        <div className="header--img_wrapper">
          <Link to="/"><img id="header-logo" src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbce4b8b21fee045a78cb83/999c7ba4091044766dced2dee6afbcb9/Logo_Mariatcha.png" alt="logo" /></Link>
        </div>

        <ul className="list_wrapper">
          <Link to="/about"><li className="nav--item">SOBRE MIM</li></Link>
          <Link to="/events"><li className="nav--item">EVENTOS</li></Link>
          <Link to="/products"><li className="nav--item">ENCOMENDAS</li></Link>
          <Link to="/contact"><li className="nav--item">CONTACTOS</li></Link>
          {/* <button
            id="login"
            type="button"
            onClick={handleLoginClick}
          >
            LOGIN

          </button> */}
        </ul>

      </header>
    </>
  );
}

export default connect()(Header);
