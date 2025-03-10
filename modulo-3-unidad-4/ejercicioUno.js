const cuerpo = document.getElementsByClassName("cuerpo")[0];
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');
const reset = document.getElementById('reset'); 

rojo.addEventListener( 'click', function(){
    cuerpo.classList.add('rojo');
});

verde.addEventListener( 'click', function(){
    cuerpo.classList.add('verde');
});

azul.addEventListener( 'click', function(){
    cuerpo.classList.add('azul');
});

reset.addEventListener('click', function () {
    cuerpo.classList.remove('rojo', 'azul','verde');
});

