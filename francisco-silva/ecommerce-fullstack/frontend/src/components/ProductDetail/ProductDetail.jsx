import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail } from '../../redux/actions/productAction';


function ProductDetail({ productDetail, dispatch, actions } ) {

    const id = window.location.pathname.match(/\d+/)[0] 
        if (!productDetail) {
            dispatch(requestProductDetail(+id));
        }

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
        productDetail: state.productReducer.productDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);