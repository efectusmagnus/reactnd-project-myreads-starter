import React from 'react'
import propTypes from 'prop-types'
import noBookCover from '../images/owl-no-cover-available.png'

// Using a stateless functional component, as we are only rendering
const Book = (props) => {
  const { book, onChangeShelf} = props
  return(
      <li className="books-container">
        <div className="book">
          <div className="book-top">
            <div className="book-cover" alt={book.title} style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: noBookCover})`}}>
            </div>
            <div className="book-shelf-changer">
            <form>
              <select
                name="select-item"
                aria-label="Move a book to the following options:"
                onChange={(event) => onChangeShelf(book, event.target.value)}
                value={book.shelf ? book.shelf : 'none'}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Already Read</option>
                <option value="none">None</option>
              </select>
            </form>
            </div>
            <div className="book-information">
              <h3 className="book-title">
                {book.title ? book.title : null}
              </h3>
              { // Display authors in separate lines (if there are more than one)
                book.authors &&
                book.authors.map((author, index) => (
                  <h4 className="book-authors" key={index}>{author}</h4>
                ))
              }
            </div>
          </div>
        </div>
      </li>
  )
}

//Use PropTypes to typecheck the props for a component
Book.propTypes = {
  book: propTypes.object.isRequired,
  onChangeShelf: propTypes.func.isRequired
}

export default Book
