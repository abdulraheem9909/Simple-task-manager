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

  if (action.type === "EDIT") {
    console.log("payload", action.payload);
    const lenght = [state.list.length];
    const newtodo = [...state.list];

    let index = -1;
    for (let i = 0; i < lenght; i++) {
      index++;
      if (newtodo[i].id === action.payload.id) {
        console.log("newtodo_id", newtodo[i].id);
        console.log("action.payload.id", action.payload.id);
        break;
      }
    }
   

    if (index !== -1) {
      newtodo[index] = action.payload;

      state.list = newtodo;

      return {
        ...state,
      };
    }
  }

  return state;
};

export default Reducer;
