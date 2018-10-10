const defaultState = {
  bookTitle: "",
  books: [],
  booksLoaded: false
};

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, { volumeInfo: { title: state.bookTitle } }]
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        bookTitle: action.bookTitle
      };
    case "FETCHED_BOOKS":
      return {
        ...state,
        books: action.books,
        booksLoaded: true
      };
    default:
      return state;
  }
}
