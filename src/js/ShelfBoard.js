import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

// Using a stateless functional component, as we are only rendering
const ShelfBoard = (props) => {
  const {ShelfBoardIndex, books, onChangeShelf} = props
  return(
    <div>
      <div className="bookshelf-books" key={ShelfBoardIndex}>
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
          ))}
        </ol>
      </div>/*End of bookshelf-books */
    </div>/*End of div to make react happy*/
  )
}

// Use PropTypes to typecheck the props for a component
ShelfBoard.PropTypes = {
  ShelfBoardIndex: PropTypes.number.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ShelfBoard
