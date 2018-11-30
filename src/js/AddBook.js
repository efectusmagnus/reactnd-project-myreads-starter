import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Using a stateless functional component because we are only rendering
const AddBook = (props) => {
  const {currentBooks} = props
  return(
    <div className="open-search">
      <Link to={{
        pathname: '/search',
        state: {
          booksFromStartPage: currentBooks
        }
      }} />
    </div>/* End of open search */
  )
}

//Use PropTypes to typecheck the props for a component
AddBook.PropTypes = {
  currentBooks: PropTypes.array.isRequired
}

export default AddBook
