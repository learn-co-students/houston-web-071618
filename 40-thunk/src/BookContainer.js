import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { connect } from "react-redux";
import { addBook, changeTitle, fetchBooks } from "./actions/bookActions";

class BookContainer extends React.Component {
  // state = {
  //   bookTitle: ""
  // };

  componentDidMount() {
    // initiate that action
    this.props.fetchBooks();
  }

  // changeBookTitle = e => {
  //   // when someone is typing in the form, update the state
  //   // of this component
  //   this.setState({
  //     bookTitle: e.target.value
  //   });
  // };

  // addBook = e => {
  //   e.preventDefault();
  //   // when we click 'add book', we want to take the current input
  //   // and create a new object and add it to the array of books
  //
  //   // ALREADY DONE IN OUR REDUCER
  //   // this.setState({
  //   //   books: [
  //   //     ...this.state.books,
  //   //     { volumeInfo: { title: this.state.bookTitle } }
  //   //   ]
  //   // });
  // };

  render() {
    if (!this.props.areBooksLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <BookForm
          handleSubmit={this.props.addBook}
          handleChange={this.props.changeTitle}
        />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    areBooksLoaded: state.booksLoaded
  };
}

const mapDispatchToProps = {
  addBook: addBook,
  changeTitle: changeTitle,
  fetchBooks: fetchBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
