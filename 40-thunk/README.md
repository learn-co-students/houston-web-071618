# Redux Thunk + Redux Review

## Setup

- API
  - https://www.googleapis.com/books/v1/volumes?q=subject:genre&maxResults=10

## Steps

- Review
  - Install `redux`, `react-redux`, `redux-thunk`
  - Create `rootReducer` file in `/reducers/` with default state
  - Import `createStore` in index.js file
  - Import `rootReducer` into index.js file
  - Import `Provider` from `react-redux`
  - Create the store with the `rootReducer`
  - Connect store to `redux-devtools`
  - Wrap `App` in `Provider` and pass the store as prop
  - Create components
    - We'll start off with a class-based `BookLIst` component
    - Import `BookLIst` into `App`
  - Create an `action/books.js` file to export an action creator `addBook(book)` and an action type `ADD_BOOK`
  - Handle case in `rootReducer` where `ADD_BOOK` action is dispatched
  - Test out using `redux-devtools`
  - Dispatch takes an object as an argument!
- Thunk
  - `connect` BookList component to the store
  - Send in `books` array as state
  - Build out a book adapter and export `fetchBooks`
    - Fetch books
    - Convert to JSON
    - Pass in genre
    - Return fetch
  - Create action creator to fetch books with action type `FETCHED_BOOKS`
    - Call book adapter `fetchBooks`
    - `then` return an action with books
  - Dispatch `fetchBooks` action
  - Test in browser!
  - Actions must be plain objects (by default)
  - Use THUNK!
    - import `thunk` in index.js
    - createStore `applyMiddleWare(thunk)`
    - Any action must return a function that takes `dispatch`
    - `FETCHING_*` to `FETCHED_*` types
    - `isLoading` state?
  - Using `thunk` and `redux-devtools`
