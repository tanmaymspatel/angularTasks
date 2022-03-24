/*Mentors data model*/ 

export class Mentors {
    public id: number;
    public name: string;
    public age: string;
    public gender: string;
    public company: string;
    public department: string;
    public city: string;
    public maritalStatus: string;

    constructor(id: number, name: string, age: string, gender: string, company: string, 
        department: string, city: string, maritalStatus: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.department = department;
        this.city = city;
        this.maritalStatus = maritalStatus
    }
}


/*Mentors Form data Model*/ 

export class MentorsForm{
    public name: string;
    public age :  string;
    public gender : string;
    public company: string;
    public department: string;
    public city: string;
    public maritalStatus: string;
    constructor(name:string, age:string, gender:string, company: string, 
        department: string, city: string, maritalStatus: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.department = department;
        this.city = city;
        this.maritalStatus = maritalStatus
    }
}

export interface Filterform{
     name:string;
     city : string;
     gender:string
}