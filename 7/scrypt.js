'use strict';

function ArrayM(list) {
    let arr = [];
    let newarr = [];
     

	for (let key in list) {
                arr.push(list[key]);
                           
        }
		newarr = arr.map(object => `<li>${object}</li>`);;
        context.innerHTML = newarr.join(''); 

    
  
}
ArrayM( ['1', '2', '3', 'I', 'am', 'Groot']);