import React, {useState, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestHeroDetail, cleanUp } from '../../redux/actions/heroAction';


function HeroDetail({ heroDetail, dispatch, actions , match, state} ) {
    const [id] = useState(match.params.heroId)
    /* const id = window.location.pathname.match(/\d+/)[0] */ 
        useEffect(() => {
            if (id) {
                dispatch(requestHeroDetail(+id));
            }

            return () => actions.cleanUp()


        }, [id, dispatch, actions]);
        
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
    debugger
    return {
        heroDetail: state.heroReducer.heroDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ cleanUp }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);