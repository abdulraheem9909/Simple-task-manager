import React from "react";

const CompleteListComponent = (props) => {
  return (
    <div class="completelist-component">
      <div class="completelist">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flex: "1",
            padding: "0 50px",
            height: "40px",
          }}
        >
          <ul>
            {" "}
            <li>
              {" "}
              <p
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flex: "1",
                  textDecorationLine: "line-through",
                }}
              >
                {props.title}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompleteListComponent;
