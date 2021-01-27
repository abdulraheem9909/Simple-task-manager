import React from "react";

const initialState = {
  list: [],
  complete: {},
  completeList: [],
};

const Reducer = (state = initialState, action) => {
  //let complete=[...state.complete];
 
  if (action.type === "ADD") {
    return {
      ...state,
      list: [action.payload, ...state.list],
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      list: state.list.filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }
  if (action.type === "COMPLETE") {
   // complete=[...state.complete]
    return {
      ...state,
      complete: state.list.filter((item) => {
        return item.id === action.payload;
      }),
    };
     
  }
  if (action.type === "COMPLETELIST") {
    // complete=[...state.complete]
     return {
        ...state,
        completeList: [state.complete, ...state.completeList],
      
    
     };
      
   }
  return state;
};

export default Reducer;
