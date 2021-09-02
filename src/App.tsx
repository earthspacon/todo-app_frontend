import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginForm from './components/Login'
import Todo from './components/Todo'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Todo} />
      </Switch>
    </Router>
  )
}

export default App
