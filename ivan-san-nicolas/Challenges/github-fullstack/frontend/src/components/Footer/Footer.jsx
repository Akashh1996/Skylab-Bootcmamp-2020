import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="landing__footer">
      <p className="project-description">
        This is a project made with redux for the client side,
        and Github API, Express and MongoDb for the server side
      </p>
      <small className="developers-cite">
        Developed by
        {' '}
        <a href="https://github.com/Ivansannicolas">Ivansannicolas</a>
        {' '}
        and
        {' '}
        <a href="https://github.com/algmebe1">algmebe1</a>
        <i className="fa fa-github" />
      </small>
    </footer>
  );
}

export default Footer;
