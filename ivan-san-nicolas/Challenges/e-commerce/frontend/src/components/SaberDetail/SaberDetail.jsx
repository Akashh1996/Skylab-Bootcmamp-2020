import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSaberByName } from '../../redux/actions/SabersActions';
import './SaberDetail.css';

function SaberDetail({ saberItem, dispatch, match }) {
    debugger;
    const saberName = match?.params?.saberName;
    if(saberItem === undefined) {
        dispatch(requestSaberByName(saberName));
    }else if(saberItem["product-name"] !== saberName){
        dispatch(requestSaberByName(saberName));
    }

    let saberImageSilver = saberItem ? saberItem["product-image-url"] : null;
    let saberImageBlack = saberItem ? saberItem["product-black-image-url"] : null;
    const [saberImage, setSaberImage] = useState(saberItem?["product-image-url"] : null);

    let counter = 1;
    debugger;
    
    return (
        <>
                {saberItem ? (saberItem["product-name"] ? (
                    <section className="saber__detail">
                        <section className="saber__detail__image">
                            {saberImage === saberImageBlack ? (
                                <img src={saberImageBlack} 
                                alt={saberItem["product-name"]} id="saber__detail__image"/>
                                ) : (
                                    <img src={saberImageSilver} 
                                    alt={saberItem["product-name"]} id="saber__detail__image"/>    
                                )
                            } 
                        </section>
                        <section className="saber__detail__properties">
                            <section className="saber__detail__properties__text">
                                <div className="saber__detail__properties__name">
                                    <p >{saberItem["product-name"]}</p>
                                    <p >{saberItem["product-price"]} $</p>
                                </div>
                                <div className="saber__detail__properties__description">
                                    <p >{saberItem["product-description"]}</p>
                                </div>
                                <div className="saber__detail__properties__specifications">
                                    {
                                        Object.keys(saberItem["product-specifications"]).map((specification) => {
                                        if(counter % 2 === 0) {
                                            counter++;
                                            return <p className="specifications-row even-row">{specification} : {saberItem["product-specifications"][specification]}</p>
                                        } else {
                                            counter++;
                                            return <p className="specifications-row odd-row">{specification} : {saberItem["product-specifications"][specification]}</p>
                                        }
                                    })
                                    }
                                </div>    
                            </section>
                            <section className="saber__detail__colorButtons">
                                <span>Colors:</span>
                                <button type="button" className="saber__detail__colorButtons__button silver-button" onClick={()=> setSaberImage(saberImageSilver)}>Silver</button>
                                <button type="button" className="saber__detail__colorButtons__button black-button" onClick={()=> setSaberImage(saberImageBlack)}>Black</button>
                            </section>
                        </section>
                    </section>
                ) : (
                    <h1 style={{color:"white"}}>There's no saber :\</h1>
                )) : (
                    <h1>There's no saber :/</h1>
                )
            }
        </>
    );
}

function mapStateToProps({ sabersReducer }) {
    return {
        saberItem: sabersReducer.saberItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ requestSaberByName }, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaberDetail);