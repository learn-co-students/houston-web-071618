import React from "react";

export default class BookForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          <input
            onChange={this.props.handleChange}
            type="text"
            placeholder="Book title!"
          />
        </label>

        <input type="submit" value="Add Book!" />
      </form>
    );
  }
}
