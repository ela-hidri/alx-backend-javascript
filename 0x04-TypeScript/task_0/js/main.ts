interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: alex;
  lastName: limbo;
  age: 16;
  location: egypt;
}

const student2: Student = {
  firstName: alina;
  lastName: roger;
  age: 18;
  location: Tunisia;
}

const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);
