import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import loadSabers from '../../redux/actions/SabersActions';
import './css/SabersList.css';

function SabersList({ sabersList, dispatch }) {
  if (sabersList.length < 1) {
    dispatch(loadSabers());
  }

  const loadingGif = {
    url: "https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/9c2334900c729b99361b5a18d1c742bd/oie_14185311GwjOnih4.gif",
    alt:"loading-gif"
  }
  return (
    <>
        {sabersList?.length > 0 ? (
        <>
            <ul className="sabersList-section">
                {
                sabersList.map((saber) => {
                    return (
                      <li className="saber-wrapper">
                        <Link to={`/sabers/detail/${saber["product-name"].toLowerCase()}`} style={{ textDecoration: 'none' }}>
                          <p className="saber-title">{saber['product-name']}</p>
                        </Link>
                        <Link to={`/sabers/detail/${saber["product-name"].toLowerCase()}`}>
                          <img className="saber-image" src={saber['product-image-url']} alt="saber-img"></img>
                        </Link>
                      </li>
                            );
                })
                }
            </ul>
        </>
        ) : (
          <div className="sabersList-loading-screen">
            <h1>Loading...</h1>
            <img src={loadingGif.url}
              alt={loadingGif.alt}
              className="loading-gif"/>
          </div>
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
    actions: bindActionCreators({ loadSabers }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SabersList);
