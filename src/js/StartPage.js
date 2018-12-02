import React from 'react'
import BookShelf from './BookShelf'

// Using a stateless functional component, as we are only rendering
const StartPage = () => {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <BookShelf />
    </div>
  )
}

export default StartPage
