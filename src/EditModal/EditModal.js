import React, { useState,useEffect } from "react";
import "./EditModal.css";
import {Edit} from "../redux/actionCreator/actionCreator"
import { connect } from "react-redux";

const EditModal = (props) => {
 
  const [input, setInput] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [id, setId] = useState(props.id);

  const clickHandler= () =>{
    let data = {
      id: id,
      input: input,
      description:description
    };
   

    props.edit(data);
    setDescription("");
    setInput("");
    props.history.push("/");
  }
  useEffect(() => {
   setInput(props.title);
   setDescription(props.description);
   setId(props.id);
}, [props.title,props.description,props.id])


  console.log("inside edit modal", props)

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Edit you task
          </h2>
          <span
            className="close"
            onClick={() => {
              props.history.push("/");
            }}
          >
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <input
              style={{
                height: "50px",
                width: "70%",
                borderRadius: "15px",
                marginRight: "10px",
                outline: "none",
                marginBottom: "20px",
              }}
              type="text"
              name="input"
              placeholder="Write here ..."
              
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <textarea
              id="w3review"
              name="w3review"
              rows="10"
              cols="50"
              type="text"
              placeholder="write Discription"
            
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "70%",
                borderRadius: "15px",
                marginRight: "10px",
                outline: "none",
                border: "solid 2px",
              }}
            ></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button
           onClick={clickHandler}
            style={{
              height: "50px",
              width: "20%",
              borderRadius: "20px",
              marginLeft: "10px",
              outline: "none",
            }}
          >
           <span style={{fontSize:"16px" ,fontWeight:"bold"}}>Update</span> 
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (data) => dispatch(Edit(data)),
  };
};

export default connect(null,mapDispatchToProps)(EditModal);
