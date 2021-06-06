"use strict";

function createNewUser()
{
    this.Name1 = prompt('Введите своё имя: ');
    this.Name2 = prompt('Введите свою фамилию: ');
    this.date = prompt('Введите свой день рождения(dd.mm.yyyy): ');
    this.getLogin = function(){
        let getLogin =(this.Name1.substr(0,1) + this.Name2).toLowerCase();
        return getLogin;
    }
    this.getAge = function(){
        let today = new Date();
        let tY = today.getFullYear();
        let d = +this.date.substring(0, 2);
        let m = +this.date.substring(3, 5);
        let y = +this.date.substring(6, 10);
        let bd = new Date(y, m-1, d);
        let by = bd.getFullYear();
        let age = tY - by;
        if(today < new Date(bd.setFullYear(tY))){
            age = age -1;
        }
        return age;
    }
    this.getPassword = function(){
        let getPassword = (this.Name1[0].toUpperCase() + this.Name2.toLowerCase() + this.date.substring(6,10));
        return getPassword;
    }
    let newUser;
}
this.newUser = new createNewUser();
console.log(`Ваш логин: ${newUser.getLogin()}`);
console.log(`Ваш возраст: ${newUser.getAge()}`);
console.log(`Пароль: ${newUser.getPassword()}`);
