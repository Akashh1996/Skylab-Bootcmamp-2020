import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestItems, deleteItems, putItems, cleanProductDetail } from '../redux/actions/itemActions';

function ItemsList({ items, actions, dispatch }) {
  const [inputItem, setInputItem] = useState('');

  useEffect(() => {
    if (!items && !items?.length) {
      dispatch(requestItems());
    }
  },[dispatch, items])

  
  return (
    <>
      <h1>{"ToDoList"}</h1>
      {(items && items.length
                    && items.map((item) => (
                      <li key={item._id}>
                        {item.item}
                        <button type="submit" onClick={() => {
                          actions.deleteItems(item._id)
                          actions.cleanProductDetail()}}>
                          X
                        </button>
                      </li>
                    )))}
      <input onChange={event => setInputItem(event.target.value)} />
      {(inputItem && inputItem.length
        && <button type="button" onClick={() => {
          actions.putItems(inputItem)
          actions.cleanProductDetail()}}>
            Add
          </button>)}
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
    actions: bindActionCreators({ requestItems, deleteItems, putItems, cleanProductDetail }, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);