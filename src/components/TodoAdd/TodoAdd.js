import React, { useState } from "react";
import { connect } from "react-redux";
import { Add } from "../../redux/actionCreator/actionCreator";
import "./TodoAdd.css";
import { v4 as uuidv4 } from 'uuid';


const TodoAdd = (props) => {
  const [input, setInput] = useState("");
  const [empty, setEmpty] = useState("");

  const clickHandler = () => {
    let data = {
      id: Math.floor(Math.random() * 999999),
      input: input,
    };
    input
      ? props.input(data) && setEmpty("")
      : setEmpty("write something first");
    setInput("");
  };

  return (
    <div>
      {empty && <p style={{display:"flex", justifyContent:"center",color:"red"}}>{empty}</p>}
      <div className="container" style={{display:"flex"}}>
        <input 
          style={{height:"50px", width:"70%",borderRadius:"20px",  marginRight:"10px",outline: "none"}}
          type="text"
          name="input"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={clickHandler}
        style={{height:"50px", width:"10%",borderRadius:"20px", marginLeft:"10px",outline: "none"}}
        >Add</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    input: (data) => dispatch(Add(data)),
  };
};

export default connect(null, mapDispatchToProps)(TodoAdd);
