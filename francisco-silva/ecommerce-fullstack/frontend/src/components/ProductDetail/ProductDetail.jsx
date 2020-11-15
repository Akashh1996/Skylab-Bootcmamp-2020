import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail } from '../../redux/actions/productAction';


function ProductDetail({ productDetail, dispatch, actions } ) {
 
    const id = window.location.pathname.match(/\d+/)[0] 
    debugger;
        if (!productDetail) {
            dispatch(requestProductDetail(+id));
        }
        console.log(productDetail)

    return (
        
        <>
            {productDetail &&
               <div>
                   <p> {productDetail.name} </p> 
                    <p>{productDetail.id}</p>
                   
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