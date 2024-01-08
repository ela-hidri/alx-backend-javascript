export default function updateStudentGradeByCity(students, city, newGrades) {
  let rst = [];
  rst = students.filter((student) => student.location === city).map((student) => {
    const newgrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (newgrade) return (newgrade.grade);
    return ('N/A');
  });
  return (rst);
}
