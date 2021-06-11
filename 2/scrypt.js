"use strict";

let number = prompt('Введите число:', '50');
if (Number.isInteger(number)){
let array = [];
for( var i = 1; i <= number; i++)
    {
        if(i % 5 == 0)
            array.push(i);
    }
if(array.length == 0)
    {
       console.log(`Nope`);
    }
else 
    {
        console.log(array);  
    }
}
else{
console.log(`Error,float number`);}