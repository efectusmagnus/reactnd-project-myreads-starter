import React from 'react'
import StartPageTitle from './StartPageTitle'
import * as BookShelf from './BookShelf'

// Using a stateless functional component, as we are only rendering
const StartPage = () => {
  return(
    <div className="list-books">
      <StartPage/>
      <BookShelf/>
    </div>
  )
}

export default StartPage
