import React, { useEffect } from 'react';
import './principal.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getInputs, deleteInput } from '../redux/actions/actions';

function Principal({ inputList, actions }) {
  useEffect(() => {
    if (inputList.length === 0) {
      actions.getInputs();
    }
  }, []);

  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <input type="text" />
      <input type="submit" />
      <ul className="list">
        {inputList && inputList.map((inputItem) => (
          <>
            <li key={Date.now()}>{inputItem.text}</li>
            <button key={Date.now() * Math.random()} type="button" className="button-delete" onClick={() => actions.deleteInput(inputItem)}>Remove</button>
          </>
        ))}
      </ul>
    </div>
  );
}

Principal.propTypes = {
  inputList: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    getInputs: PropTypes.func.isRequired,
    deleteInput: PropTypes.func.isRequired,
  }).isRequired,
};

Principal.defaultProps = {
  inputList: [],
};

function mapStateToProps({ inputsReducer }) {
  return { inputList: inputsReducer };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getInputs, deleteInput }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
