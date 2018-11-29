import React from 'react'
import PropTypes from 'prop-types'
import noBookCover from '../no-book-cover.png'

// Using a stateless functional component, as we are only rendering
const Book = (props) => {
  const { book.onChangeShelf} = props
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: noBookCover})`
          }}>
          </div>{/*End of book cover*/}
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
          </div>{/*End of book shelf changer*/}
          <div className="book-title">
            {book.title ? book.title : null}
          </div>{/*End of book title*/}
          { // Display authors in separate lines (if there are more than one)
            book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>{author}</div>
            ))
          }
        </div>{/*End of book top*/}
      </div>{/*End of book*/}
    </li>
  )
}

//Use PropTypes to typecheck the props for a component
Book.PropTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
