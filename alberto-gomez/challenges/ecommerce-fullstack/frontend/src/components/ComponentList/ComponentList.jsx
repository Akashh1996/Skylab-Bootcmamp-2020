import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {requestComponents} from '../../redux/actions/bikeActions'

function ComponentList({componentList, dispatch}) {

    if (!componentList && !componentList?.length) {
        dispatch(requestComponents());
    }
    return <h1>Component List works!</h1>
}

function mapStateToProps(state) {
    debugger;
    return {
        componentList: state.bikeReducer.componentList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentList);