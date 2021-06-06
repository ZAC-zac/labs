"use strict";

let name;
let age;
do{
    name = prompt('Здравствуйте, как вас зовут?', 'Rostyslav');
}
while(!name.match(/^[A-Za-z]+$/));
do{
      age = prompt('Сколько вам лет?', '19');
      }
while(!parseInt(age));
if(age<18){
        alert(`You are not allowed to visit this website`);
    }
else if(age >=18 && age <=22){
        let ques = confirm("Are you sure you want to continue?");
if(ques == true){
    alert(`Welcome, ${name}`);
}
    else {
        alert('You are not allowed to visit this website');
    }}
else {
    alert(`Welcome, ${name}`);
}