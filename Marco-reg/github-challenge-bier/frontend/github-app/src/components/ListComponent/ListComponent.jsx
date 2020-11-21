import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {propTypes} from 'prop-types';
// import {Link} from 'react-router-dom';
import {requestList} from '../../redux/actions/listActions';

function List({list, dispatch}) {
    useEffect(()=> {
        if (!list || list.length !== 0) {
            dispatch(requestList());
            
        }
    }, [])

    
    debugger;
        if(list) {
            console.log(list[0].projectInfo)
        }


    return(
        <>
        <div className="list_wrapper">
        <h4>sdjfknjk</h4>
        {/* {list &&
                list.length >= 1 &&
                list.map((list) => <div className="product_wrapper">
                <span>{list}</span>
                
                </div>
                )} */}


        </div>
        

        </>
        
    )
}
function mapStateToProps(state) {
    debugger
     return {
         list: state.listReducers.list
     };
 }
 function mapDispatchToProps(dispatch) {
     debugger
     return {
         actions: bindActionCreators({ }, dispatch),
         dispatch
     };
 }
 export default connect(mapStateToProps, mapDispatchToProps)(List);