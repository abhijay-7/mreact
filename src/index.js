import React from "react";

import ReactDOM from 'react-dom';


const element = <h1>hello react</h1>

ReactDOM.render(element, document.getElementById("root"));

function Hello(){
for(let i =0; i<5;i++){
    console.log(i);

}
// console.log(i);
}

Hello();

const person={
    name: 'jamie',
    age:15,
    setage(age){
        this.age=age;
    },
    Hello(){
        console.log("hi");
    },
    getAge(){
        return this.age;
    }
}

person.setage(13);
console.log(person);
console.log(this);

const hi = person.Hello;

hi();

const giveAge=person.getAge.bind(person);


console.log(giveAge())

const jobs =[
    {id:1, isActive:false},
    {id:2,isActive:true},
    {id:3,isActive:false}
]

const activeJ=jobs.filter(job=>job.isActive);

console.log(activeJ);

const person2= {
    talk(){
        setTimeout(function(){
            console.log(this)
        }, 1000);
    }
}

person2.talk();
// to get rid of this rebinding save the current refernce in some variable and use that
//or use arrow function
const person3= {
    talk(){
        var self=this;
        setTimeout(function(){
            console.log(self)
        }, 1000);
    }
}

person3.talk();

const person4= {
    talk(){
        setTimeout(()=>{
            console.log(this)
        }, 1000);
    }
}

const colors = ['red','green','blue'];

const items = colors.map(color=>`<li>${color}</li>`);

console.log(items);

const address = {
    street: "12, ave",
    state: 'ubq',
    country: 'zyaq'
}

const {country, street: st}=address;

console.log(st);

const a =[1,2,2];
const b =[3,4,6];
const c =[9, ...a , 0 ,...b];
console.log(c);

const p5= {...person, ...address};
console.log(p5);



class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log(`${this.name} Walking...`);

    }
}

const npc= new Person("kiko");

npc.walk();


class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject =subject;
        
    }
    teach(){
        console.log(`${this.name} teaching ${this.subject}......`)
    }
}

const nTeacher= new Teacher("futaba","maths");

nTeacher.teach();
