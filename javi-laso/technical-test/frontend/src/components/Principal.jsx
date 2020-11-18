import React, { useEffect, useState } from 'react';
import './principal.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getInputs, deleteInput, addInput } from '../redux/actions/actions';

function Principal({ inputList, actions }) {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (inputList.length === 0) {
      actions.getInputs();
    }
  }, []);

  function changeValue(event) {
    setInputValue(event.target.value.trim());
  }

  return (
    <div className="App">
      <h1 className="title">Todo list</h1>
      <input type="text" value={inputValue} id="input-text" onChange={changeValue} />
      <input type="submit" value="Add toDo" id="submit-button" onClick={() => { actions.addInput({ text: inputValue }); setInputValue(''); }} />
      <ul className="list">
        {inputList && inputList.map((inputItem) => (
          <li key={Date.now() * Math.random()}>
            <span key={Date.now() * Math.random()}>{inputItem.text}</span>
            <button key={Date.now() * Math.random()} type="button" className="button-delete" onClick={() => actions.deleteInput(inputItem)}>Remove</button>
          </li>
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
    addInput: PropTypes.func.isRequired,
  }).isRequired,
};

Principal.defaultProps = {
  inputList: [],
};

function mapStateToProps({ inputsReducer }) {
  return { inputList: inputsReducer };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getInputs, deleteInput, addInput }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
