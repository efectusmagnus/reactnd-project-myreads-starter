import React from 'react';
import * as BooksAPI from './BooksAPI';
import '../css/App.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import BookSearcher from './BookSearcher';
//import NoImageFound from './NoImageFound';

class BooksApp extends React.Component {
  state = {
    /**
     * DONE: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
     currentlyReading: [],
     wantToRead: [],
     read: []
  }
  componentDidMount() {
    this.listOfBookShelf()
  }

  listOfBookShelf() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
        read: books.filter((book) => book.shelf === 'read')
      })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.listOfBookShelf()
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} changeShelf={this.changeShelf} />
        )}/>

        <Route path="/search" render={({ history}) => (
          <Search books={this.state.books} changeShelf={this.changeShelf} />
        )}/>

      </div>

export default BooksApp
