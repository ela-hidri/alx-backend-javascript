export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '' || typeof startString !== 'string') { return ''; }
  set.forEach((value) => {
    if (value.startsWith(startString) && typeof value === 'string') {
      // if (str === '') { str = value.slice(startString.length); } else { str += `-${value.slice(startString.length)}`; }
      str.push(value.slice(startString.length));
    }
  });
  return str.join('-');
}
