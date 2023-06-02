document.addEventListener('DOMContentLoaded', function(){

let button = document.getElementById('botaoinp');
let body = document.getElementById('body');

button.addEventListener('click', clk);

function clk(){
    body.classList.toggle('darkt');

    if(button.textContent === 'Light Theme'){
        button.textContent = 'Dark Theme';
    }
    else{
        button.textContent = 'Light Theme';
    }
}



// ************



let txtinv = document.getElementsByName('texto')[0];
txtinv.addEventListener('input', sbm);

function sbm(){

    txt = txtinv.value;
    let quote = document.getElementById('quote');

    quote.innerHTML = '"' + txt + '"';

}

let selectedFont = ''
let slt = document.getElementById('font');
slt.addEventListener('change', fontfam);

function fontfam(){

    let newFont = slt.value;

    if(selectedFont != newFont){

        quote.classList.remove('rob', 'opns', 'playf');

        if(slt.value === 'Roboto'){
            quote.classList.add('rob');
        }

        if(slt.value === 'Open Sans'){
            quote.classList.add('opns');
        }

        if(slt.value === 'Playfair'){
            quote.classList.add('playf');
        }

        selectedFont = newFont;
    }
}

})



