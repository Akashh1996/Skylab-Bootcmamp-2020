import React from 'react';
import { Link } from 'react-router-dom';
import './Thank.css';

import { deleteAllFromCart } from '../../../redux/actions/productAction';

function Thank() {
  return (
    <>
      <div className="ty_wrapper">
        <div className="title--text_wrapper">
          <div className="thank--title">
            <h1>OBRIGADA</h1>
          </div>
          <p className="p-thank-text">Entraremos em contacto consigo para agendar uma hora de entrega</p>
          <div className="thank--btn_wrapper"><Link to="/"><button id="test-id" onClick={() => deleteAllFromCart()} className="thank--back--btn" type="button">VOLTAR</button></Link></div>
        </div>
      </div>
    </>
  );
}

export default Thank;
