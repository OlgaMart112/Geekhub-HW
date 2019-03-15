
const getItem = state => state.notes.items;

const getFilter = state => state.notes.filter;

const getVisibleNotes = state => {
  const items = getItem(state);
  const filter = getFilter(state);
  return items.filter(item => item.text.toLowerCase().includes(filter));
};

export default { getItem, getFilter, getVisibleNotes };
