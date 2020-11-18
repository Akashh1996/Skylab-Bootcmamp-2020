import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSaberByName } from '../../redux/actions/sabersActions';
import { addProductToCart } from '../../redux/actions/cartActions';
import LoadingGif from '../LoadingGif/LoadingGif';
import './SaberDetail.css';

function SaberDetail({ saberItem, dispatch, match }) {
    const saberName = match?.params?.saberName;
    const saber = saberItem ? saberItem[0] : null;

    if(saberItem === undefined) {
        dispatch(requestSaberByName(saberName));
    }else if(saber["product-name"] !== saberName){
        dispatch(requestSaberByName(saberName));
    }

    let saberImageSilver = saber ? saber["product-image-url"] : null;
    let saberImageBlack = saber ? saber["product-black-image-url"] : null;
    const [saberImage, setSaberImage] = useState(saber?[0]["product-image-url"] : null);

    const blackColor = "Black";
    const silverColor = "Silver";
    const [actualColor, setActualColor] = useState(silverColor);

    let counter = 1;

    function changeColorToBlack(setSaberImage, saberImageBlack, setActualColor, blackColor) {
        setActualColor(blackColor);
        setSaberImage(saberImageBlack);
    }

    function changeColorToSilver(setSaberImage, saberImageSilver, setActualColor, silverColor) {
        setActualColor(silverColor);
        setSaberImage(saberImageSilver);
    }

    function addToCart(addProductToCart, productName, actualColor) {
        alert("Item added to cart!");
        console.log(actualColor);
        dispatch(addProductToCart(productName, actualColor));
    }

    return (
        <>
                {saber ? (saber["product-name"] ? (
                    <section className="saber__detail">
                        <section className="saber__detail__firstRow">
                            <section className="saber__detail__image">
                            {saberImage === saberImageBlack ? (
                                <img src={saberImageBlack} 
                                alt={saber["product-name"]} id="saber__detail__image"/>
                                ) : (
                                    <img src={saberImageSilver} 
                                    alt={saber["product-name"]} id="saber__detail__image"/>    
                                )
                            } 
                        </section>
                            <section className="saber__detail__options">
                            <section className="saber__detail__properties">
                            <section className="saber__detail__properties__text">
                                <div className="saber__detail__properties__name">
                                    <p >{saber["product-name"]}</p>
                                    <p >{saber["product-price"]} $</p>
                                </div>
                                <div className="saber__detail__properties__description">
                                    <p >{saber["product-description"]}</p>
                                </div>
                                <div className="saber__detail__properties__specifications">
                                    {
                                        Object.keys(saber["product-specifications"]).map((specification) => {
                                        if(counter % 2 === 0) {
                                            counter++;
                                            return <p className="specifications-row even-row">{specification} : {saber["product-specifications"][specification]}</p>
                                        } else {
                                            counter++;
                                            return <p className="specifications-row odd-row">{specification} : {saber["product-specifications"][specification]}</p>
                                        }
                                    })
                                    }
                                </div>    
                            </section>
                            <section className="saber__detail__colorButtons">
                                <span>Colors:</span>
                                <button type="button" className="saber__detail__colorButtons__button silver-button" onClick={()=> changeColorToSilver(setSaberImage, saberImageSilver, setActualColor, silverColor)}>Silver</button>
                                <button type="button" className="saber__detail__colorButtons__button black-button" onClick={()=> changeColorToBlack(setSaberImage, saberImageBlack, setActualColor, blackColor)}>Black</button>
                            </section>
                            </section>
                        </section>
                        </section>
                        <section className="saber__detail__addToCart">
                            <button type="button" className="addToCart-button" onClick={()=> addToCart(addProductToCart, saber["product-name"], actualColor)}>Add to cart</button>
                        </section>
                    </section>
                ) : (
                    <LoadingGif />
                )) : (
                    <LoadingGif />
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
        actions: bindActionCreators({ requestSaberByName, addProductToCart }, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaberDetail);