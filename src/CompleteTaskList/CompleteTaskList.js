import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompleteListComponent from "../components/CompletelistComponent/CompleteListComponent";
import "./CompleteTaskList.css";

const CompleteTaskList = (props) => {
  console.log("completetask", props.completeList);
  return (
   
    <div className="Completelist">
    <h1>Completed tasks :</h1>
      {props.completeList.map((items) => {
        return items.map((item) => {
          return (
            <CompleteListComponent
              key={item.id}
              title={item.input}
              id={item.id}
            />
          );
        });
      })}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" ,width:"100%", alignItems:"center"}}
      >
        <button
          onClick={() => {
            props.history.push("/");
          }}
          style={{
            height: "50px",
            width: "80%",
            borderRadius: "20px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            alignItems: "center",
            backgroundColor: "rgb(248 126 98)",
            color: "white",
            outline: "none",
            border: "none",
          }}
        >
          BACK
        </button>
      </div>
    </div>
  
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    completeList: state.completeList,
  };
};

export default connect(mapStateToProps)(withRouter(CompleteTaskList));
