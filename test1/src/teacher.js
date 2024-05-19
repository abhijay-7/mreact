import {Person} from './person';
export default class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject =subject;
        
    }
    teach(){
        console.log(`${this.name} teaching ${this.subject}......`)
    }
}
