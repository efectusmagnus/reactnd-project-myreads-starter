import React from 'react'
import PropTypes from 'prop-types'
import noBookCover from '../images/owl-no-cover-available.png'

// Using a stateless functional component, as we are only rendering
const Book = (props) => {
  const { book, onChangeShelf} = props
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: noBookCover})`}}>
          </div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => onChangeShelf(book, event.target.value)}
              value={book.shelf ? book.shelf : 'none'}>
              <option value="moveTo" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Already Read</option>
              <option value="none">None</option>
            </select>
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
Book.PropTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
