"use strict";

function filtr(array, type) {
	let res = [];
   array.forEach(element => {if(typeof element != type){res.push(element);}});
	return res;
}

 console.log(filtr(['hello', 'world', 23, '23', null], "string"))