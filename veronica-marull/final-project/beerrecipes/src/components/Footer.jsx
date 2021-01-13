import React from 'react';
import './footer.css';

function Footer () {
  return (
    <>
        <footer>
                <div className="subscribe">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Email address" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" className="input-email"required></input>
                        <input type="submit" value="Subscribe" className="subscribe-btn"></input>
                    </form>
                </div>
            <div className="social-icons">
                <i className="far fa-envelope"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>

            </div>
        </footer>
    </>
  );
}

export default Footer;
