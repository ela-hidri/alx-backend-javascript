export default function getListStudentIds(tab) {
  if (!(tab instanceof Array)) { return ([]); }
  let ids = [];
  ids = tab.map((stdent) => (stdent.id));
  return (ids);
}
