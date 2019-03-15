import { connect } from 'react-redux';
import UpdateNoteForm from './UpdateNoteForm';
import { NoteActions } from '../../modules/notes';


const mapDispatchToProps = { updateNote: NoteActions.updateNote};

export default connect(
  null,
  mapDispatchToProps,
)(UpdateNoteForm);
