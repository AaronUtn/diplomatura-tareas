
const distanciaIngresada = parseInt(prompt('Ingrese la distancia a recorrer:', ''));
console.log(distanciaIngresada);
//console.log(Number.isNaN(parseInt("abd")));

if (Number.isNaN(distanciaIngresada)) {// el que genera NaN es el parseInt al intentar convertir palabras en números
    document.write(`La distancia ingresada no es valida`);

}else if(distanciaIngresada >= 0 && distanciaIngresada < 1000){
    document.write('tiene que ir a pie');
}else if(distanciaIngresada>= 1000 && distanciaIngresada < 10000){
    document.write('tiene que ir en bicicleta');
}else if(distanciaIngresada >= 10000 && distanciaIngresada < 30000){
    document.write('tiene que ir en colectivo');

}else if(distanciaIngresada >= 30000 && distanciaIngresada < 100000){
    document.write('tiene que ir en auto');
}else{
    document.write('tiene que ir en avion');
}