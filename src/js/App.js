import React from 'react'
import { BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import StartPage from './StartPage'
import SearchPage from './SearchPage'
import '../css/App.css'
/*import PageNotFound from '../images/PageNotFound.png'*/

const PageNotFound = ({location}) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
    <p>The page you were looking for was moved or does not exist.</p>
  </div>
)
// Using a stateless functional component, as we are only rendering
const BooksApp = () => {
  return(
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" alt="home page" exact component={ StartPage } />
          <Route path="/search" alt="search page" component={ SearchPage } />
          <Redirect component={ PageNotFound } to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default BooksApp
