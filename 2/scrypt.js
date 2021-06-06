"use strict";

let n = prompt('Введите число:', '1000');
let arr = [];
for( var a = 1; a <= n; a++)
    {
        if(a % 5 == 0)
            arr.push(a);
    }
if(arr.length == 0)
    {
       console.log(`Nope`);
    }
else 
    {
        console.log(arr);  
    }