export default function cleanSet(set, startString) {
  let str = '';
  if (startString.length === 0 || typeof startString !== 'string') { return ''; }
  set.forEach((value) => {
    if (value.startsWith(startString) && typeof value === 'string') {
      if (str === '') { str = value.replace(startString, ''); } else { str += `-${value.replace(startString, '')}`; }
    }
  });
  return str;
}
