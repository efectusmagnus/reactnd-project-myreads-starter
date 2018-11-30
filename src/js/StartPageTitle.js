import React from 'react'
import PropTypes from 'prop-types'

// Using a stateless functional component, as we are only rendering
// The title is a immuable property (that is why we use prop rather than state)
const StartPageTitle = (props) => {
  return(
    <div className="list-books-title">
      <h1>{props.title}</h1>
    </div>
  )
}

// Set default prop value using the .defaultProps property
StartPageTitle.defaultProps = {
  title: 'MyReads'
}

// Use PropTypes to typecheck the props for a component
StartPageTitle.PropTypes = {
  title: PropTypes.string.isRequired
}

export default StartPageTitle
