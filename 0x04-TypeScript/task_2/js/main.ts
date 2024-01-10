interface DirectorInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return ("Working from home")
    }
    getCoffeeBreak(): string {
        return ("Getting a coffee break")
    }
    workDirectorTasks(): string {
        return ("Getting to director tasks")
    }
    
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return ("Cannot work from home")
    }
    getCoffeeBreak(): string {
        return ("Cannot have a break")
    }
    workTeacherTasks(): string {
        return ("Getting to work")
    }
}

export function createEmployee(salary: string | number){
    if (typeof salary === "number")
    {
        if (salary < 500)
        return new Teacher();
        else new Director();
    }
    else
    {
        const sal = parseInt(salary);
        if (!isNaN(sal))
        {
            if (sal < 500)
            return new Teacher();
            else new Director();
        }
    }
}

export const isDirector = (employee : Director | Teacher) => {employee instanceof Director}

export function executeWork(employee : Director | Teacher) {
    if (employee instanceof Director) employee.workDirectorTasks()
    if (employee instanceof Teacher) employee.workTeacherTasks();
}

type Subjects = "Math" | "History";
export function teachClass(todayClass: Subjects){
    if (todayClass === "Math") return "Teaching Math";
    else return "Teaching History";
}