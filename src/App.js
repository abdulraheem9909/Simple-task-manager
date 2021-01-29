import React from 'react'
import { Route ,Switch} from 'react-router-dom'
import CompleteTaskList from './CompleteTaskList/CompleteTaskList'
import EditComponent from "./EditModal/EditModal";
import Pages from './pages'

const App = () => {
  return (
    <div>
   

    <Switch>
    <Route   path="/" component={Pages}/>
    <Route exact  path="/completelist" component={CompleteTaskList}/>
   
    
    </Switch>
    </div>
  )
}

export default App
