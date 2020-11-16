import React from 'react';
import {connect} from 'react-redux';
import {requestComponents} from '../../redux/actions/bikeActions';
import './ComponentList.css'

function ComponentList({componentList, dispatch}) {

    if (!componentList && !componentList?.length) {
        dispatch(requestComponents());
    }
    return <div className="item-home-container">
                {componentList && componentList.length && componentList.map(component => {
                    // eslint-disable-next-line no-restricted-globals
                    return <div className="item-home"><a href={`components/${component.id}`}><img src={`${component["product-image-url"]}`} alt=""/></a>
                    <p className="item-home-name">{component["product-name"]} - <span className="price">${component.price.toFixed(2)}</span></p></div>
                })}
            </div>
}

function mapStateToProps({bikeReducer}) {
    debugger;
    return {
        componentList: bikeReducer.componentList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentList);