import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { requestSabers } from '../../redux/actions/sabersActions';
import FirstRow from './FirstRow/FirstRow';
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
