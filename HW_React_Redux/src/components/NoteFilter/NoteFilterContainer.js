import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';
import { NoteActions, NoteSelector } from '../../modules/notes';

const mapStateToProps = state => ({
  value: NoteSelector.getFilter(state),
});

const mapDispatchToProps = { onChange: NoteActions.changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
