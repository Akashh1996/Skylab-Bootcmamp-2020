import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <>
      <h1 className="notfound-title">PAGINA NAO ENCONTRADA</h1>
      <Link to="/"><button className="notfound-back-btn" type="button">VOLTAR</button></Link>
    </>
  );
}

export default NotFound;
