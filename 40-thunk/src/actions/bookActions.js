export function addBook(e) {
  e.preventDefault();

  return {
    type: "ADD_BOOK"
  };
}

export function changeTitle(e) {
  return {
    type: "CHANGE_TITLE",
    bookTitle: e.target.value
  };
}

export function fetchBooks(genre) {
  return dispatch => {
    fetch("http://localhost:3000/books")
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "FETCHED_BOOKS",
          books: data.items
        });
      });
  };
}
