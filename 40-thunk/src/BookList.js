import React from "react";

export default class BookList extends React.Component {
  render() {
    const books = this.props.books.map(book => {
      return <li>{book.volumeInfo.title}</li>;
    });
    return <ul>{books}</ul>;
  }
}
