/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';

import { putItemInCart } from '../../../redux/actions/productAction';

import './CardComponent.css';
import './ListCardComponent.css';

function CustomizedDialogs({ productDetail, actions }) {
  const [open, setOpen] = useState(false);
  let [counter, setCounter] = useState(1);

  const resetCounter = () => {
    setCounter(counter = 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    event.stopPropagation();
    resetCounter();
  };

  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (

    <div role="button" className="modal-window modal" onClick={handleClickOpen} tabIndex={0}>

      <div className="list--item_wrapper">
        <div className="list--img_wrapper">
          <img className="list--img" src={`${productDetail.photo}`} alt="" />
        </div>
        <div className="item--details_wrapper">
          <h3 className="item--title">
            {productDetail.name}
          </h3>
          <div className="price--qtt_wrapper accordion">
            <section className="accordion-item">

              <span className="item--price">
                {productDetail.price}
                €
              </span>
              <span id="test" className="item--quantity">
                {productDetail.quantity}
              </span>
              <div className="accordion-item-content list--description_wrapper">
                {productDetail.category.map((description) => (
                  <li className="item_description">
                    { ` ${description} | ` }

                  </li>
                ))}
              </div>
            </section>
          </div>

        </div>
        <div className="add--label_wrapper">
          <div className="list--label--image_wrapper">
            {productDetail.label.map((description) => (
              <img
                className="list--label--image"
                src={`${description}`}
                alt=""
              />
            ))}
          </div>
          <span className="material-icons add--btn_detail">
            add
          </span>
        </div>

      </div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        {productDetail
      && (
      <article className="detail--item">

        <section className="image--btn_wrapper">
          <img className="detail--item_image" src={`${productDetail.photo}`} alt="" />

          <span type="button" onClick={handleClose} className="close-btn material-icons">
            cancel
          </span>

        </section>
        <h2 className="detail--item_title">{productDetail.name}</h2>
        <span className="detail--item_price">
          {productDetail.price}
          €
        </span>
        <div className="label--image_wrapper">
          {productDetail.label.map((description) => (
            <img
              className="label--image"
              src={`${description}`}
              alt=""

            />
          ))}

        </div>
        <div className="detail--description_wrapper">
          {productDetail.category.map((description) => (
            <li className="item_description">
              { ` ${description} | ` }

            </li>
          ))}
        </div>

        <div className="detail--quantity_wrapper">
          <span className="detail--quantity_title">Quantidade</span>
          <div className="add-remove_wrapper">
            <span onClick={decrement} className="add-btn material-icons">
              remove_circle_outline
            </span>
            <p className="quantity-txt">{counter}</p>
            <span onClick={increment} className="remove-btn material-icons">
              add_circle_outline
            </span>
          </div>
        </div>
        <div className="detail--button_wrapper">
          <button
            type="button"
            onClick={() => { (actions.putItemInCart(productDetail, counter, 'add')); }}
            className="detail--button"
            id="test-btn"
          >
            + ADICIONAR AO MEU PEDIDO

          </button>
        </div>

      </article>
      )}

      </Dialog>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ putItemInCart }, dispatch) };
}

export default connect(null, mapDispatchToProps)(CustomizedDialogs);
