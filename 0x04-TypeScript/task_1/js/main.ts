  interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
  };

  interface Directors extends Teacher{
    numberOfReports:string
  }

  function printTeacher(firstName:string, lastName:string){
    const str = firstName.slice(1) + ". " + lastName;
    return (str);}

    class StudentClass implements StudentClassInterface{
        firstName: string;
        lastName: string;

        constructor(firstName:string, lastName:string)
        {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        workOnHomework = () => "Currently working";

        displayName = () => this.firstName;
    }

    interface StudentClassInterface {
        firstName:string,
        lastName: string,
        workOnHomework(): string,
        displayName(): string

    }

    interface MyClassConstructor
    {
        new (firstName:string, lastName:string) : StudentClass
    }

