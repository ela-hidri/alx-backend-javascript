export default function cleanSet(set, startString) {
  let str = ' ';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString.length > 0) {
      if (str === ' ') { str = value.replace(startString, ''); } else { str += `-${value.replace(startString, '')}`; }
    }
  });
  return str;
}
