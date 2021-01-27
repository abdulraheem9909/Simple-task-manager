import "./App.css";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./TodoList/TodoList";


const App = () => {
  return <div className="App">
  <TodoAdd/>
  <TodoList/>
  </div>;
};

export default App;
