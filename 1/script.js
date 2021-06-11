"use strict";

let name;
let age;
do{
    name = prompt('Введите имя?', 'Rostyslav');
}
while(!name.match(/[A-Z]/));
do{
      age = prompt('Введите возраст?', '19');
      }
while(!parseInt(age));
if(age<18){
        alert(`You are not allowed to visit this website`);
    }
else if(age >=18 && age <=22){
        let answer = confirm("Are you sure you want to continue?");
if(answer == true){
    alert(`Welcome, `+name);
}
    else {
        alert('You are not allowed to visit this website');
    }}
else {
    alert(`Welcome, `+name);
}