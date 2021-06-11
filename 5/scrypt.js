"use strict";
const mil =31688100000;
function createNewUser()
{
    this.firstName = prompt('Введите своё имя: ');
    this.lastName = prompt('Введите свою фамилию: ');
    this.date = prompt('Введите свой день рождения(dd.mm.yyyy): ');
    this.getLogin = function(){
        let getLogin =(this.firstName.substr(0,1) + this.lastName).toLowerCase();
        return getLogin;
    }
    this.getAge = function(){
        let today = new Date();
        let day = +this.date.substring(0, 2);
        let month = +this.date.substring(3, 5);
        let year = +this.date.substring(6, 10);
        let birthd = new Date(year, month, day);
		let raz =today - birthd;
		let age =Math.floor(raz /mil);
        return age;
    }
    this.getPassword = function(){
        let getPassword = (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.date.substring(6,10));
        return getPassword;
    }
    let newUser;
}
this.newUser = new createNewUser();
console.log(`Ваш логин: ` + newUser.getLogin());
console.log(`Ваш возраст:`+ newUser.getAge());
console.log(`Пароль: `+ newUser.getPassword());
