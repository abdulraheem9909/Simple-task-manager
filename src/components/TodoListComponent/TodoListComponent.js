import React from "react";
import { connect } from "react-redux";
import { Delete } from "../../redux/actionCreator/actionCreator";
import { Complete } from "../../redux/actionCreator/actionCreator";
import { CompleteList } from "../../redux/actionCreator/actionCreator";

const TodoList = (props) => {
  const deleteHandler = () => {
    props.complete(props.id);
    props.completelist();
    props.delete(props.id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: "1",
        padding: "0 50px",
        height: "100px",
      }}
    >
      <h2 style={{ display: "flex", justifyContent: "flex-start", flex: "6" }}>
        {props.title}
      </h2>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          flex: "1",
          height: "50px",
          width: "10%",
          borderRadius: "20px",
          marginLeft: "10px",
          marginTop: "10px",
          alignItems: "center",
          backgroundColor: "rgb(248 126 98)",
          color: "white",
          outline: "none",
          border: "none",
        }}
      
      >
        Edit
      </button>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          flex: "1",
          height: "50px",
          width: "10%",
          borderRadius: "20px",
          marginLeft: "10px",
          marginTop: "10px",
          alignItems: "center",
          backgroundColor: "#0080008f",
          color: "white",
          outline: "none",
          border: "none",
        }}
        onClick={deleteHandler}
      >
        Done
      </button>
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

export default connect(null, mapDispatchToProps)(TodoList);
