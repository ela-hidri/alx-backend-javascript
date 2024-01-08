export default function getStudentsByLocation(students, city) {
  let rst = [];
  rst = students.filter((student) => student.location === city);
  return (rst);
}
