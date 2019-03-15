import { connect } from 'react-redux';
import NoteList from './NoteList';


import { NoteActions, NoteSelector } from '../../modules/notes';

const mapStateToProps = state => ({
  notes: NoteSelector.getVisibleNotes(state),
});

const mapDispatchToProps = {
  deleteNote: NoteActions.deleteNote,
  toggleNote: NoteActions.toggleNote,
  editNote: NoteActions.editNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
