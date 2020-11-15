import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCart, deleteProductFromCart } from '../../redux/actions/cartActions';
import './Cart.css';

function Cart({ cart, dispatch }) {
    if(!cart[0] || !cart[0]["product-list"]) {
        dispatch(requestCart());
    }

    let totalPrice = 0;

    let totalNames = [];

    return (
        <>
        <div className="cart__products">
            {cart[0] ? cart[0]["product-list"] ? (
                cart[0]["product-list"].map((product) => {
                    totalPrice += product["product-price"];
                    totalNames.push(product["product-name"]);
                    return (
                        <div className="cart__product__row">
                            <div className="cart__product__row__section product__image">
                                <img src={product["product-image-url"]} 
                                alt={product["product-name"] + "image"}
                                id="cart__product__row__image"/>
                            </div>
                            <div className="cart__product__row__section product__name">
                                <p>{product["product-name"]}</p>
                            </div>
                            <div className="cart__product__row__section product__color">
                                <p>Color: {product["actual-color"]}</p>
                            </div>
                            <div className="cart__product__row__section product__price">
                                <p>Price: {product["product-price"]}$</p>
                            </div>
                            <div className="cart__product__row__section delete_button">
                                <div onClick={() => dispatch(deleteProductFromCart(product["product-name"]))}>
                                    <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5faf189214f79954c01b58a0/ed60e36b1ad46c7c1607c8af0c151491/icons8-basura-30.png" 
                                    alt="delete-product" id="delete-button"/>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Im sorry friend</p>
            ) : (
                <p>Sooo sorry</p>
            )}
        </div>
        <div className="cart__final-buy">
            <div className="cart_final-buy__totalNames">
                <p>Products:</p>
                {totalNames.length > 0 ? (
                    totalNames.map((name) => {
                    return <p>{name}</p>
                    })
                ) : (
                    <p>There are no products</p>
                )}
            </div>
            <div>
                <p>Total Price: {totalPrice}$</p>
            </div>
        </div>
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
        actions: bindActionCreators({ requestCart, deleteProductFromCart }, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);