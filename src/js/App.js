import React from 'react'
import { Route } from 'react-router-dom'
import  StartPage from './StartPage'
import  SearchPage from './SearchPage'
import '../css/App.css'

// Using a stateless functional component, as we are only rendering

const BooksApp = () => {
  return(
    <div className="app">
      <Route exact path="/" component={StartPage}/>
      <Route path="/search" component={SearchPage}/>
    </div>
  )
}

export default BooksApp
