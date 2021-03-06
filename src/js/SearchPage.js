import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  Book from './Book'
import  * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  // Store books as state, rather than as a prop, as book shelf may change
  state = {
    books: [],
    searchBook: [],
    hasError: false
  }

  // Fetch books from the StartPage after component is inserted in the DOM
  componentDidMount() {
    const books = this.props.location.state.booksFromStartPage;
    if (books) {
      this.setState({ books });
    }
  }

  //  Search book through BooksAPI with handler function
  onSearch = (event) => {
    const bookQuery = event.target.value
    if (bookQuery) {
      BooksAPI.search(bookQuery).then((bookIsFound) => {
        if(!bookIsFound || bookIsFound.hasOwnProperty('error')) {
          this.setState({searchBook: [], hasError: true})
        } else {
          this.setState({searchBook: bookIsFound, hasError: false})
          this.syncBookShelves()
        }
      })
    } else {
      this.setState({searchBook: []})
    }
  }

  // Synchronize searched books with the current shelf books
  syncBookShelves = () => {
    const books = this.state.books
    const searchBook = this.state.searchBook
    if (searchBook.length > 0) {
      books.forEach((book) => {
        searchBook.forEach((searchedBook) => {
          if (book.id === searchedBook.id) {
            searchedBook.shelf = book.shelf
          }
        })
      })
    }

    this.setState({searchBook: searchBook})
  }

  // Change book shelf with handler function
  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((found) => {
      // Change the shelf property of the book object to a new shelf
      book.shelf = shelf

      /** Replace the previous state book array (without current books) with the
      new updatedBooks array
      */
      const books = this.state.books.filter(b => b.id !== book.id).concat(book);
      this.setState({ books });
    })
  }

  render() {
    const searchBook = this.state.searchBook
    const hasError = this.state.hasError
    return(
      <div className="bg-color">
        <header className="search-books-bar">
            <form>
              <Link to="/" className="close-search" aria-label="Return to the home page">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  aria-label="text placeholder"
                  type="text"
                  onChange={this.onSearch}
                  placeholder="Search by title or author"
                />
              </div>
            </form>
        </header>

        <section className="search-books-results">
          {searchBook.length > 0 && (
            <div>
              <h3 className="book-title">Search Returned {searchBook.length} books.</h3>
              <ol className="books-grid">
                {searchBook.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={this.onChangeShelf}
                  />
                ))}
              </ol>
            </div>

          )}
          {hasError && (
            <h3>Search returned no books. Please try again!</h3>
          )}
        </section>
      </div>
    )
  }
}

export default SearchPage
