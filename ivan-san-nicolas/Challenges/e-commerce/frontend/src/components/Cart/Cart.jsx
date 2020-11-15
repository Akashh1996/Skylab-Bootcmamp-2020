import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import requestCart from '../../redux/actions/cartActions';
import './Cart.css';

function Cart({ cart, dispatch }) {
    if(!cart || !cart["product-list"]) {
        dispatch(requestCart());
    }
    return (
        <>
            {cart[0] ? cart["product-list"] ? (
                <p>{cart[0]["product-list"]["product-name"]}</p>
            ) : (
                <p>Im sorry friend</p>
            ) : (
                <p>Sooo sorry</p>
            )}
        </>
    );
}

function mapStateToProps({ cartReducer }) {
    return {
        cart: cartReducer.cartArray,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ requestCart }, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);