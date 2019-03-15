import React from 'react';

const Note = ({ text, completed, onDelete, onCompleted, onEdit}) => (
  <div
    style={{
      minWidth: 320,
      boxShadow:
        '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      marginBottom: 32,
      marginRight: 8,
      marginLeft: 8,
      padding: 8,
      flex: '0 0 calc(33.3333% - 16px)',
      backgroundColor: '#fff',
    }}
  >
    <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </p>
    <input type="checkbox"
        defaultChecked={completed}
        onChange={onCompleted}
        required={true}
   />
    <hr />
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
 
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
     
    </footer>
  </div>
);

export default Note;
