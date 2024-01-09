export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const z = new Int8Array(buffer, position, value);
  return z;
}
