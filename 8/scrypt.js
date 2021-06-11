'use strict';

document.getElementById("price").onblur = function(){
    let input = price.value; 
    price.innerText = input;
    if(input <= 0 || isNaN(input)){
        document.getElementById("price").classList.add('red');
        document.getElementById("error").innerText = `Please enter correct price`;
		
    }
    else {
       
        
		document.getElementById("error").innerText = ``;
         document.getElementById("price").classList.remove('red');
        document.getElementById("price").value = "";
        let SpanU = document.getElementById('SpanList')
        let SpanN = document.createElement('span');
        SpanN.setAttribute('onclick', `removespan(this);`);
        let tu = document.createTextNode(`Current price:  `+input);
        SpanN.appendChild(tu);
        SpanU.appendChild(SpanN);
    }
    };
let removespan = function(span) {
    span.parentNode.removeChild(span);
};
