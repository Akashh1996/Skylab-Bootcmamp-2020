import React , {useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProductDetail } from '../../redux/actions/productAction';
import './ProductDetail.css';
import { Link } from 'react-router-dom';

function ProductDetail({ productDetail, dispatch, actions }) {

    const id = window.location.pathname.match(/\d+/)[0]

    useEffect(()=>{
        
        if (id) {
            debugger
            dispatch(requestProductDetail(+id));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    console.log(productDetail)


    return (

        <>
            {productDetail &&
                <div className="detail-wrapper">
                    <p>{productDetail[0]["product-name"]}</p>
                    <p>price:{productDetail[0].price}€</p>
                    <span className="material-icons">shopping_cart</span>
                    <img className="product_img" alt="product-img" src={`${productDetail[0]["product-image-url"]}`}></img>
                    <button><Link to= {`/`}>back</Link></button>
                </div>
            }
        </>
    );
}
function mapStateToProps(state) {
    debugger
    return {
        productDetail: state.productReducer.productDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);