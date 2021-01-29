import { ADD } from "../actionType/actiontype";
import { DELETE } from "../actionType/actiontype";
import { COMPLETE } from "../actionType/actiontype";
import { COMPLETELIST } from "../actionType/actiontype";
import { EDIT } from "../actionType/actiontype";

export const Add = (data) => {
  return { type: ADD, payload: data };
};

export const Delete = (id) => {
  return { type: DELETE, payload: id };
};

export const Complete = (id) => {
  return { type: COMPLETE, payload: id };
};
export const CompleteList = () => {
  return { type: COMPLETELIST };
};
export const Edit = (data) => {
  return { type: EDIT, payload: data };
};
