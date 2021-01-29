import React from 'react'
import TodoListComponent from "../components/TodoListComponent/TodoListComponent";
import {connect} from "react-redux";

const TodoList = (props) => {
  console.log("todolist",props.todoList);
  return (
    props.todoList.map(items=>{
      return<TodoListComponent key = {items.id} title={items.input}  id={items.id} description={items.description}/>
    })


  )
}
const mapStateToProps = (state) => {
  console.log(state);
   return {
     todoList: state.list,
     completeList :state.completeList
    }  
   
}

export default connect(mapStateToProps)(TodoList);
