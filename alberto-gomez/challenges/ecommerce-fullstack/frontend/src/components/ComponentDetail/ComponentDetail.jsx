import React from 'react';
import {connect} from 'react-redux';
import {requestSingleComponent, addToCart} from '../../redux/actions/bikeActions';
import './ComponentDetail.css';
import {bindActionCreators} from 'redux'

function ComponentItem({componentItem, dispatch}) {

    const cardId = window.location.pathname.split('/')[2];

    if (!componentItem) {
        dispatch(requestSingleComponent(cardId))
    }

    return <>
        {componentItem && 
        <div className="detail-container">

            <img src={`${componentItem["product-image-url"]}`} alt="" className="image-detail"/>
            <div className="detail-description">

            <h4>{componentItem["product-name"]}</h4>
            <p className="header-top-left-text">{componentItem["header-top-left-text"]}</p>

            <p className="price-container">Price: <span className="price">${componentItem.price.toFixed(2)}</span><button className="add-cart" onClick={dispatch(addToCart(cardId))}>Add to Cart</button></p>
            </div>
        </div>
        }
    </>
}

function mapStateToProps({bikeReducer}) {
    debugger;
    return {
        componentItem: bikeReducer.componentItem,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({addToCart}, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentItem);