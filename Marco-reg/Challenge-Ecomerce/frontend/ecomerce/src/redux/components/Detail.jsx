import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail, cleanProductDetail } from '../actions/shopActions';


function Detail({match, productDetail, dispatch, actions }){
    const [productId] = useState(+match.params.productId);
    useEffect(() => {
        if(productId){
            dispatch(requestProductDetail(productId));
        }
        return () => actions.cleanProductDetail();
    },[productId, dispatch, actions])
    return(
        <>
            {productDetail && 
            <h1>{productDetail['product-name']}</h1>}
            {productDetail && 
            <img src={productDetail['product-image-url']} alt={"product img"}/>}
        </>
    )
}
function mapStateToProps(state){
    
    return {
        
        productDetail: state.productReducer.productDetail,
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ cleanProductDetail }, dispatch),
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);