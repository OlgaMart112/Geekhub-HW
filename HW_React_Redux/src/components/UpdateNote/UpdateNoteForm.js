import React, { Component } from 'react';


class UpdateNoteForm extends Component {

 state = {
  text: '',
      };

handleChange = e => {
    this.setState({ text: e.target.value });
      };

handleEdit = (e) => {
  e.preventDefault();
  console.log(this.props);
  this.props.updateNote({id : this.props.note.id, data: this.state.text});
}

render() {
return (
<div key={this.props.note.id} className="note">
  <form className="form" onSubmit={this.handleEdit}>
    <textarea required rows="5" 
    defaultValue={this.props.note.text} 
    onChange={this.handleChange} cols="28"  /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default UpdateNoteForm;