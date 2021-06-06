"use strict";

function filtr(array, type) {
    return array.reduce((res, currentItem) => {if ( typeof currentItem != type) {  res.push(currentItem);} return res} , []); 
}

 console.log(filtr(['hello', 'world', 23, '23', null], 'string'))