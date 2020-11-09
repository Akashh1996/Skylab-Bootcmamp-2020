import React from 'react';

function Select(props) {
    return(
        <>
        <div className="column">
        <label for={props.value}>{props.value}</label>
        <select name={props.value} id={props.value}>
            {props.option.map(option => <option value={option}>{option}</option>)}
        </select>
        </div>
        </>
    )
}

export default Select