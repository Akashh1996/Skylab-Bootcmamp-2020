import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListElement from '../ListElement/ListElement';
import { loadItemsList } from '../../../redux/actions/actions';
import './itemList.css';
import Filter from '../Filter/Filter';

function ItemList({ items, filteredList, actions }) {
  const [stateItems] = useState(items);
  useEffect(() => {
    if (!items || stateItems !== items) {
      actions.loadItemsList();
    }
  }, []);

  return (
    <main>
      <section>
        <h1 className="list-title">Principal offers</h1>
        <Filter />
        <ul className="list">
          { filteredList
            ? filteredList.map((item) => <ListElement item={item} key={+item.id} />)
            : items?.length > 0 && items.map((item) => <ListElement item={item} key={+item.id} />)}
        </ul>
      </section>
    </main>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  filteredList: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    loadItemsList: PropTypes.func.isRequired,
  }).isRequired,
};

ItemList.defaultProps = {
  filteredList: undefined,
  items: undefined,
};

function mapStateToProps({ itemsReducer }) {
  return {
    items: itemsReducer.itemList,
    filteredList: itemsReducer.filteredList,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadItemsList }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
