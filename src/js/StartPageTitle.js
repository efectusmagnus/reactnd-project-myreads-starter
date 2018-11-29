import React from 'react'
import PropTypes from 'prop-types'

// Using a stateless functional component, as we are only rendering
// The title is a immuable property (that is why we use prop rather than state)
const StartPage = (props) => {
  <div className="list-of-books-title">
    <h1>{props.title}</h1>
  </div>{/* End of list of books title*/}
}

// Set default prop value using the .defaultProps property
StartPageTitle.PropTypes = {
  title: PropTypes.string.isRequired
}
