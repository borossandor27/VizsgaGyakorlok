import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './components/UserList'

function App() {


  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/" component={UserList} />
          </Switch>

        </Router>
      </div>
    </>
  )
}

export default App
