import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListElement from '../ListElement/ListElement';
import { loadItemsList } from '../../../redux/actions/actions';
import './itemList.css';

function ItemList({ items, actions }) {
  useEffect(() => {
    actions.loadItemsList();
  }, []);

  return (
    <main>
      <section>
        <h1>Principal offers</h1>
        <ul className="list">
          {items?.length > 0 && items.map((item) => <ListElement item={item} />)}
        </ul>
      </section>
    </main>
  );
}

ItemList.propTypes = {
  items: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadItemsList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ itemsReducer }) {
  return { items: itemsReducer.itemList };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ loadItemsList }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
