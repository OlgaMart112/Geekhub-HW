import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { NoteActions } from '../../modules/notes';

const mapDispatchToProps = { addNote: NoteActions.addNote};

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
