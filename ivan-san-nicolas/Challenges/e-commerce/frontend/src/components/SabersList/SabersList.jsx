import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadSabers from '../../redux/actions/SabersActions';

function SabersList({ sabersList, dispatch }) {
  if (sabersList.length < 1) {
    dispatch(loadSabers());
  }

  return (
    <>
        {sabersList?.length > 0 ? (
        <>
            <ul>
                {
                sabersList.map((saber) => {
                    return (
                      <div>
                        <p>{saber['product-name']}</p>
                        <img src={saber['product-image-url']} alt="saber-img"></img>
                      </div>
                            );
                })
                }
            </ul>
        </>
        ) : (
            <h1>There are no heroes :/</h1>
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
