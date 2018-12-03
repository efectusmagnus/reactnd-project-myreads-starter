import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfBoard from './ShelfBoard'
import AddBook from './AddBook'

class BookShelf extends Component {
    state = {
      books: []
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books: books
        })
      })
    }

    // Change book shelf (with handler function)
    onChangeShelf = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then((found) => {
        console.log('Update request :)', found)

        //Change book shelf property to new shelf
        book.shelf = newShelf
        /** Replace the previous state book array (excluding current books) with
        the new updatedBooks array
        */
        var updatedBooks = this.state.books.filter(
          (bookResults) => bookResults.id !== book.id)
          updatedBooks.push(book)
          // Place the new state with the updatedBooks array
          this.setState({books: updatedBooks})
      })
    }

    render() {
      const boards = [
        {type: 'currentlyReading', title: 'Currently Reading'},
        {type: 'wantToRead', title: 'Want to Read'},
        {type: 'read', title: 'Already Read'}
      ]

      return(
        <div>
          <div className="list-books-content">
            {this.state.books.length > 0 &&
            <div>
              { boards.map((board, index) => {
                  const booksBoard = this.state.books.filter(
                    (book) => book.shelf === board.type
                  )
                  return(
                      <section className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{board.title}</h2>
                        <ShelfBoard
                          key={index}
                          books={booksBoard}
                          boardList={boards}
                          onChangeShelf={this.onChangeShelf}
                        />
                      </section>
                  )
                })
              }
            </div>
          }
          </div>
          <AddBook currentBooks={this.state.books} />
        </div>
      )
    }
}

export default BookShelf
