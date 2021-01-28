import "./App.css";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./TodoList/TodoList";
import styled from "styled-components";
import{Route,Switch} from "react-router-dom";
import CompleteList from "./CompleteTaskList/CompleteTaskList";


const Pages = (props) => {
  const Button =styled.button`
  disply:flex;
  justify-content:center;
  background: lightgrey;
  border-radius: 30px;
  outline:none;
  border:none;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  height:100%;
  width:50%;
`
const clickHandler = () =>{
  console.log("props",props);
  props.history.push("/completelist")
}

  return (
  <>
  <div className="App">
      <div className="input"><TodoAdd/></div>
      <div className="button"><Button onClick={clickHandler}><span style={{fontSize:"20px", fontWeight:"bold"}}>Click here to see Completed Tasks</span></Button></div>
      <div className="list"><TodoList/></div>
  </div>
  <Route exact  path="/completelist" component={CompleteList}/>
</>
  )
};

export default Pages;
