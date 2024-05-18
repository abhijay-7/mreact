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
    }
}

person.setage(13);
console.log(person);
console.log(this);

const hi = person.Hello;

hi();
