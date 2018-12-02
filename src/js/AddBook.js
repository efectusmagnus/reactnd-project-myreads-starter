import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

// Using a stateless functional component because we are only rendering
const AddBook = (props) => {
  const {currentBooks} = props
  return(
    <div className="open-search">
      <Link aria-label="Search books to add to your book shelf" to={{
        pathname: '/search',
        state: {
          booksFromStartPage: currentBooks
        }
      }} />
    </div>
  )
}

//Use PropTypes to typecheck the props for a component
AddBook.propTypes = {
  currentBooks: propTypes.array.isRequired
}

export default AddBook
