import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { requestSabers } from '../../redux/actions/sabersActions';
import LoadingGif from '../LoadingGif/LoadingGif'
import './css/SabersList.css';

function SabersList({ sabersList, dispatch }) {
  if (sabersList.length < 1) {
    dispatch(requestSabers());
  }

  return (
    <>
        {sabersList?.length > 0 ? (
          <div className="sabersList-section">
              <div className="cart-button-link">
                <Link to={"/cart"}>
                  <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/2108a82b4ba215ac9f894f55acfc5668/icons8-carrito-de-compras-50.png"
                  alt="cart-icon"/>
                </Link>
              </div>
              <h1 className="sabersList-section__sabers__title">Sabers</h1>
            <ul className="sabersList-section__sabers">
                {
                sabersList.map((saber) => {
                    return (
                      <li className="saber-wrapper">
                        <Link to={`/sabers/${saber["product-name"]}`} style={{ textDecoration: 'none' }}>
                          <p className="saber-title">{saber['product-name']}</p>
                        </Link>
                        <Link to={`/sabers/${saber["product-name"]}`} className="saber-image__link">
                          <img className="saber-image" src={saber['product-image-url']} alt="saber-img"></img>
                        </Link>
                      </li>
                    );
                })
                }
            </ul>
        </div>
        ) : (
          <LoadingGif />
        )
        }
    </>
)
}

function mapStateToProps({ sabersReducer }) {
  return {
    sabersList: sabersReducer.sabersArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestSabers }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SabersList);
