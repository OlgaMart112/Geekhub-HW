import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <textarea
          rows="6"
          style={{ resize: 'none', marginBottom: 16, font: 'inherit' }}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
