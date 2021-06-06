"use strict";

function createNewUser()
{
    this.Name1 = prompt('Введите своё имя: ');
    this.Name2 = prompt('Введите свою фамилию: ');
    this.getLogin = function(){
        let getLogin =(this.Name1.substr(0,1) + this.Name2).toLowerCase();
        return getLogin;
    }
    let newUser;
}
this.newUser = new createNewUser();
alert(`Ваш логин: ${newUser.getLogin()}`);
