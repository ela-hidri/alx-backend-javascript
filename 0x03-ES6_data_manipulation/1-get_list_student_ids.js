export default function getListStudentIds(tab) {
  if (typeof tab === 'string') { return ([]); }
  let ids = [];
  ids = tab.map((stdent) => {
    return (stdent.id);
  });
  return (ids);
}
