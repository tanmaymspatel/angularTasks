/*Mentors data model*/ 

export class Mentors {
    public id: number;
    public name: string;
    public age: string;
    public gender: string;
    constructor(id: number, name: string, age: string, gender: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}


/*Mentors Form data Model*/ 

export class Mentorsform{
    public name: string;
    public age :  string;
    public gender : string;
    constructor(name:string, age:string, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}