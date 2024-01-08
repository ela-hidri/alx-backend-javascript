export default function getListStudentIds(tab) {
  if (typeof tab === 'string') { return ([]); }
  const ids = [];
  tab.map((stdent) => {
    ids.push(stdent.id);
  });
  return (ids);
}
