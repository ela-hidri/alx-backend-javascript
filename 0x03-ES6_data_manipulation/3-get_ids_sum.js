export default function getStudentIdsSum(students) {
  let Total = 0;
  Total = students.reduce((total, student) => total + student.id, 0);
  return Total;
}
