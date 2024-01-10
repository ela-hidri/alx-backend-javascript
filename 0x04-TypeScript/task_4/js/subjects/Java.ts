/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects{
    export interface Teacher{
        experienceTeachingJava?: number
    }
    export class JavaClass extends Subject{
        getRequirements = ()=> "Here is the list of requirements for Java";

        getAvailableTeacher = ()=> {
            if (this.teacher?.experienceTeachingJava)
            return "Available Teacher: " + this.teacher.firstName
            else return "No available teacher"
        };
    }
}