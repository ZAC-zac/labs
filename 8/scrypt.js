'use strict';

document.getElementById("price").onblur = function(){
    let input = price.value; 
    price.innerText = input;
    if(input <= 0 || isNaN(input)){
        document.getElementById("price").classList.add('rederr');
        document.getElementById("error").innerText = `Please enter correct price`;
    }
    else {
        document.getElementById("error").innerText = ` `;
        document.getElementById("price").classList.remove('rederr');
        
        document.getElementById("price").value = "";
        let SpanU = document.getElementById('SpanUv')
        let SpanN = document.createElement('span');
        SpanN.setAttribute('onclick', `rs(this);`);
        let tu = document.createTextNode(`Current price: ${input} $`);
        SpanN.appendChild(tu);
        SpanU.appendChild(SpanN);
    }
    };
let rs = function(span) {
    span.parentNode.removeChild(span);
};
