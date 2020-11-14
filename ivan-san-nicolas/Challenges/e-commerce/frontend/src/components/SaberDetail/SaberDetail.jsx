import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSaberByName } from '../../redux/actions/SabersActions';

function SaberDetail({ saberItem, dispatch, match }) {
    if(typeof(saberItem) !== 'object') {
        const saberName = match?.params?.saberName;
        dispatch(requestSaberByName(saberName));
    } else {
        console.log(saberItem);
    }
    return (
        <>
                {saberItem ? (saberItem["product-name"] ? (
                    <div>
                        <img src={saberItem["product-image-url"]} alt={saberItem["product-name"]}/>
                        <p style={{color:"white"}}>{saberItem["product-name"]}</p>
                    </div>
                ) : (
                    <h1 style={{color:"white"}}>There's no saber :\</h1>
                )) : (
                    <h1>There's no saber :/</h1>
                )
            }
        </>
    );
}

function mapStateToProps({ sabersReducer }) {
    return {
        saberItem: sabersReducer.saberItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ requestSaberByName }, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaberDetail);