import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail } from '../../redux/actions/productAction';
import './ProductDetail.css';

function ProductDetail({ productDetail, dispatch, actions } ) {
 
    const id = window.location.pathname.match(/\d+/)[0] 
    debugger;
        if (!productDetail) {
            dispatch(requestProductDetail(+id));
        }
       
        console.log(productDetail)
        console.log(id)
        console.log(productDetail[0][id-1]["product-name"])

    return (
        
        <>
            {productDetail &&
               <div className="detail-wrapper">
                   <p>{productDetail[0][id-1]["product-name"]}</p> 
                   <p>price:{productDetail[0][id-1].price}€</p> 
                   <span class="material-icons">shopping_cart</span>
               
                
                    <img className="product_img" alt="product-img" src={`${productDetail[0][id-1]["product-image-url"]}`}></img>
                   
               </div>
               }
        </>
    );
}
function mapStateToProps(state) {

    return {
        
        productDetail: state.productReducer
    };
}
function mapDispatchToProps(dispatch) {
    debugger;
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);