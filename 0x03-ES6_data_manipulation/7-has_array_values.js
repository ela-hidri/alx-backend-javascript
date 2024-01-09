export default function hasValuesFromArray(set, array) {
  let exist = true;
  array.forEach((value) => {
    if (!(set.has(value))) {
      exist = false;
    }
  });
  return (exist);
}
