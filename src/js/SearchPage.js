import React from 'react'
import { Link } from 'react-router-dom'
import  Book from './Book'
import  * BooksAPI from './BooksAPI'

class SearchPage extends Component {
  // Store books as state, rather than as a prop, as book shelf may change
  state = {
    books: [],
    searchBook: [],
    hasError: false
  }

  // Fetch books from the StartPage after component is inserted in the DOM
  componentDidMount() {
    this.setState({
      books: this.props.location.state.booksFromStartPage
    })
  }

  //  Search book through BooksAPI with handler function
  onSearch = (event) => {
    const bookQuery = event.target.value
    if (bookQuery) {
      BooksAPI.search(bookQuery).then(bookIsFound) => {
        if(!bookIsFound || bookIsFound.hasOwnProperty('error')) {
          this.setState({searchBook: bookIsFound, hasError: false})
          this.syncBookShelves()
        }
      }
    } else {
      this.setState({searchBook: []})
    }
  }

  // Synchronize searched books with the current shelf books
  const books = this.state.books
  const searchBook = this.state.searchBook
  if (searchBook.length > 0) {
    books.forEach((book) => {
      if (book.id === searchedBook) {
        searchedBook.shelf === book.shelf
      }
    })
  }

  this.setState({searchBook: searchBook})

  // Change book shelf with handler function
  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(found) {
      // Change the shelf property of the book object to a new shelf
      book.shelf = shelf

      /** Replace the previous state book array (without current books) with the
      new updatedBooks array
      */
      var updateBooks = this.state.books.filter((bookResults) =>
        bookResults.id !== book.id)

        updateBooks.push(book)
        // Place the new state with the updatedBooks array
        this.setState({books: updatedBooks})
    }
  }

  render() {
    const searchBook = this.state.searchBook
    const hasError = this.state.hasError
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.onSearch}
              placeholder="Search by title or author"
            />
          </div>{/* End of search-books-input-wrapper */}
        </div>{/* End of search-books-bar */}
        <div className="search-books-results">
          {searchBook.length > 0 && (
            <div>
              <div>
                <h3>Search Returned {searchBook.length} books.</h3>
              <div>
              <ol className="books-grid">
                {searchBook.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={this.onChangeShelf}
                  />
                ))}
              </ol>
            </div>{/* End of div to make react happy */}
          )}
          {
            hasError && (
              <div>
                <h3>Search returned no books. Please try again!</h3>
              </div>
            )
          }
        </div>{/* End of search-books-results */}
      </div>{/* End of search-books */}
    )
  }
}
