interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "alex",
  lastName: "limbo",
  age: 16,
  location: "egypt"
}

const student2: Student = {
  firstName: "alina",
  lastName: "roger",
  age: 18,
  location: 'Tunisia'
}

const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';


thead.append(th1);
thead.append(th2);

table.append(thead);


studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.lastName;

  row.append(column1);
  row.append(column2)

  table.append(row);
});

body.append(table)