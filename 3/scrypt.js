"use strict";
let first = +prompt('Введите первое число: ', '9');
let second= +prompt('Введите второе число: ', '9');
let oper = prompt('Введите операцию(+,-,*,/): ');
function calc(first, second, oper)
{
    switch(oper)
        {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                return first / second;
        }
}
console.log(calc(first, second, oper));