import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestItems, deleteItems } from '../redux/actions/itemActions';

function ItemsList({ items, actions, dispatch }) {
  if (!items && !items?.length) {
    dispatch(requestItems());
  }
  return (
    <>
      <h1>{"ToDoList"}</h1>
      {(items && items.length
                    && items.map((item) => (
                      <li key={item._id}>
                        {item.item}
                        <button type="button" onClick={() => {
                          actions.deleteItems(item._id)
                          actions.requestItems()}}>
                          X
                        </button>
                      </li>
                    )))}
    </>
  );
}
function mapStateToProps(state) {
  return {
    items: state.itemReducer.items,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ requestItems, deleteItems }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);