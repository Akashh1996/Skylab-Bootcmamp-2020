import React from 'react';
import {connect} from 'react-redux';
import {loadList} from '../redux/actions/todoActions';
import './TodoList.css';


function TodoList({taskList, dispatch}) {

    if(!taskList && !taskList?.length) {
        dispatch(loadList());
    }
    return <div className="todo-container">

    <h2>To Do List</h2>
    <ul>
    {taskList && taskList.length && taskList.map((taskItem) => {
        return <li>{taskItem.task}</li>
    })}
    </ul>
    <input type="text" placeholder="New task to be added"/>
    <button>Add to list</button>
    </div>
}
function mapStateToProps({todoReducer}) {
    return{
        taskList: todoReducer.listArray
    }
}

function mapDispatchToProps(dispatch) {
    return{
        dispatch,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);