import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBasket, deleteProduct } from '../../redux/actions/superActions';

function Basket({ basketList, actions, dispatch }) {
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  return (
    <>
      <h1>Basket</h1>
      {(basketList && basketList.length
                    && basketList.map((product) => (
                      <li key={product.id}>
                        {product['product-name']}
                        <button
                          type="submit"
                          onClick={() => {
                            actions.deleteProduct(product.id);
                            actions.getBasket();
                          }}
                        >
                          <span class="material-icons">
                            remove_shopping_cart
                          </span>
                        </button>
                      </li>
                    )))}
    </>
  );
}
function mapStateToProps(state) {
  return {
    basketList: state.superReducer.basketList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteProduct, getBasket }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
