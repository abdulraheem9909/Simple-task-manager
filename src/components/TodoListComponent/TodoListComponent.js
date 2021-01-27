import React from "react";
import {connect} from "react-redux";
import {Delete} from "../../redux/actionCreator/actionCreator";
import {Complete} from "../../redux/actionCreator/actionCreator";
import {CompleteList} from "../../redux/actionCreator/actionCreator";

const TodoList = (props) => {
  const deleteHandler= ()=>{
    
    props.complete(props.id);
    props.completelist();
    props.delete(props.id);
    
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" ,flex:"1" ,marginLeft:"10px",  marginRight:"30px"}}>
     
      <h1 style={{ display: "flex", justifyContent: "center",flex:"6" }}>{props.title}</h1>
      <h3 style={{ display: "flex", justifyContent: "center",flex:"1" }}>edit</h3>
      <h3 style={{ display: "flex", justifyContent: "center",flex:"1" }} onClick={deleteHandler}>delete</h3>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(Delete(id)),
    complete: (id) => dispatch(Complete(id)),
    completelist: () => dispatch(CompleteList()),
  };
};

export default connect(null,mapDispatchToProps)(TodoList);
