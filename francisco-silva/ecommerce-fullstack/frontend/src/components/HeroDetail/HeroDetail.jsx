import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestHeroDetail } from '../../redux/actions/heroAction';


function HeroDetail({ heroDetail, dispatch, actions } ) {
    const id = window.location.pathname.match(/\d+/)[0] 
        if (!heroDetail) {
            dispatch(requestHeroDetail(+id));
        }
    
    return (
        <>
            {heroDetail &&
               <div>
                   <p> {heroDetail.name} </p> 
                    <p>{heroDetail.id}</p>
               </div>
               }
        </>
    );
}
function mapStateToProps(state) {

    return {
        heroDetail: state.heroReducer.heroDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);