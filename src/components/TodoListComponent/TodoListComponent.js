import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { Delete } from "../../redux/actionCreator/actionCreator";
import { Complete } from "../../redux/actionCreator/actionCreator";
import { CompleteList } from "../../redux/actionCreator/actionCreator";
import EditModal from "../../EditModal/EditModal";
const TodoList = (props) => {
 
  useEffect(() => {});

  const deleteHandler = () => {
    props.complete(props.id);
    props.completelist();
    props.delete(props.id);
  };

  const editHandler = () => {
    edit();
  };

  const edit = () => {
    props.history.push("/edit");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: "1",
        padding: "0 50px",
        height: "100px",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "6",
          border: "solid 1px",
          margin: "5px",
          borderRadius: "10px",
          height: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: "1",
            fontSize: "20px",
            fontWeight: "bold",
            borderBottom: " 1px solid #aaa",
          }}
        >
          {props.title}
        </div>
        {props.description && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flex: "3",
              alignItems: "flex-start",
              overflow: "auto",
              flexWrap: "wrap",
            }}
          >
            {props.description}
          </div>
        )}
      </div>
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
        onClick={editHandler}
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

      <Route exact path="/edit">
        <EditModal {...props} />
      </Route>
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

export default connect(null, mapDispatchToProps)(withRouter(TodoList));
