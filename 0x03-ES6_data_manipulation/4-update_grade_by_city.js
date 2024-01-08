export default function updateStudentGradeByCity(students, city, newGrades) {
  let rst = [];
  rst = students.filter((student) => student.location === city);
  rst = rst.map((student) => {
    const newgrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (newgrade.length > 0) {
      return ({
        ...student,
        grade: newgrade[0].grade,
      });
    }
    return (
      {
        ...student,
        grade: 'N/A',
      });
  });
  return (rst);
}
