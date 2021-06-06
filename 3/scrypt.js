"use strict";

let a = +prompt('Введите первое число: ', '5');
let b = +prompt('Введите второе число: ', '8');
let znak = prompt('Введите операцию(+,-,*,/): ');
function res(a, b, znak)
{
    switch(znak)
        {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
}
alert(res(a, b, znak));