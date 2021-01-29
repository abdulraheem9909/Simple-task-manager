import React from "react";
import "./EditModal.css";

const EditModal = (props) => {
  console.log("props to get title etc", props)
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Edit you task
          </h2>
          <span className="close" onClick={()=>{props.history.push("/")}}>&times;</span>
        </div>
        <div className="modal-body">
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <input
              style={{
                height: "50px",
                width: "70%",
                borderRadius: "20px",
                marginRight: "10px",
                outline: "none",
                marginBottom: "20px",
              }}
              type="text"
              name="input"
              placeholder="Write here ..."
              // value={input}
              // onChange={(e) => setInput(e.target.value)}
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
        <div className="modal-header">
          <h2
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Modal Header
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
