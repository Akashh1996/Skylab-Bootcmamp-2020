import React from 'react';
import {connect} from 'react-redux';
import {requestCart} from '../../redux/actions/bikeActions';
import './ShoppingCart.css';

function ShoppingCart({componentCart, dispatch}) {

    if (!componentCart && !componentCart?.length) {
        dispatch(requestCart());
    }
    
    return <div className="shopping-cart-container">
            {componentCart && componentCart.length && componentCart.map(component => {
                return <div className="item-cart"><a href={`components/${component.id}`}><img src={`${component["product-image-url"]}`} alt=""/></a>
                <p className="item-home-name">{component["product-name"]} - <span className="price">${component.price.toFixed(2)}</span></p>
                </div>
                })
                // SUMA DE LOS ARTICULOS
            }
            </div>
}


function mapStateToProps({bikeReducer}) {
    debugger;
    return {
        componentCart: bikeReducer.componentCart,
    }
}

function mapDispatchToProps(dispatch) {
    debugger;
    return {
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);