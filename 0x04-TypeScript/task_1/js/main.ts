/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/class-name-casing */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullEmployee: boolean;
    yearsOfExprience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName} `;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return `Currently working`;
    }
    displayName(): string {
        return this.firstName;
    }
}