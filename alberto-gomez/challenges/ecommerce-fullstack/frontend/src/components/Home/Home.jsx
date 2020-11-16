import React from 'react';
import {connect} from 'react-redux';
import {requestComponents} from '../../redux/actions/bikeActions';
import './Home.css'

function Home({componentList, dispatch}) {

    if (!componentList && !componentList?.length) {
        dispatch(requestComponents());
    }

    let randomItems = [];
    if (componentList && !randomItems?.length) {
        debugger
        for (let index = 0; index < 4; index++) {
            let randomNumber = Math.floor(Math.random() * componentList.length);
            randomItems.push(componentList[randomNumber]);
            componentList.splice(randomNumber, 1);
        }
    }

    return <div className="home-container">
                <h2>Welcome to the store where you can buy up to 8 different sport products!</h2>
                <div className="item-home-container">

                {randomItems && randomItems.length && randomItems.map(component => {
                    // eslint-disable-next-line no-restricted-globals
                    return <div className="item-home"><a href={`components/${component.id}`}><img src={`${component["product-image-url"]}`} alt=""/></a>
                    <p className="item-home-name">{component["product-name"]} - <span className="price">${component.price.toFixed(2)}</span></p></div>
                })}
                </div>
                <p className="click-description">Click on the picture to see further details!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);