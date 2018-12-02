import React from 'react'
import propTypes from 'prop-types'
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
      </div>
    </div>
  )
}

// Use PropTypes to typecheck the props for a component
ShelfBoard.propTypes = {
  /*ShelfBoardIndex: propTypes.number.isRequired,*/
  books: propTypes.array.isRequired,
  onChangeShelf: propTypes.func.isRequired
}

export default ShelfBoard
