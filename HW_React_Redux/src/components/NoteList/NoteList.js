import React from 'react';
import Note from '../Note/Note';
import UpdateNoteContainer from '../../components/UpdateNote/UpdateNoteContainer';

const NoteList = ({ notes = [], toggleNote, deleteNote, editNote}) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1440,
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '0 16px',
      marginTop: 32,
    }}
  >
    {notes.map(note => (
     note.editing ? <UpdateNoteContainer note={note} key={note.id}  /> :
      <Note
        key={note.id}
        {...note}
        onCompleted={() => toggleNote(note.id)}
        onDelete={() => deleteNote(note.id)}
        onEdit = {() => editNote(note.id)}
      />
    ))}
  </div>
);

export default NoteList;
