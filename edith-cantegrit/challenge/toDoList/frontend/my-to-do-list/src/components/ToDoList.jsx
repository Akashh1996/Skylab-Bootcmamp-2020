import React from 'react';
import { connect } from 'react-redux';
import {
    deleteItemfromToDoList,
	requestLoadToDoList
} from '../redux/actions/toDoList-actions';
import { Form } from 'react-bootstrap';

function ToDoList({toDoList, dispatch}) {
    if(!toDoList && !toDoList?.length) {
        dispatch(requestLoadToDoList())
    }
return (
    <>
        <h1>My To Do List</h1>
        {toDoList && toDoList.map((item, index) => {
           return (
            <div>
            <p key={index}>{item.item}<button key={index} onClick={()=> dispatch(deleteItemfromToDoList(item._id))}>X</button></p>
            </div>
            )
        })}
        <input/>
    </>
)}

function mapStateToProps({toDoListReducer}) {
    return {
        toDoList: toDoListReducer.toDoList,
        itemDelete: toDoListReducer.itemDelete
    };
}

connect()
export default connect(mapStateToProps)(ToDoList)