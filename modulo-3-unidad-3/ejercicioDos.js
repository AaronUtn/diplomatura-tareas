const   NumerosUno=[1,2,3,4,5,6,90];
const   NumeroDos=[20,25,40,1,60,2,3];
let max = -1; //Damos por sentado que los numeros son todos enteros positivos.

for(let inicio = 0; inicio<NumerosUno.length; inicio++){
    if(NumerosUno[inicio] > max){
        max = NumerosUno[inicio];
    }
}
document.write('el mayor numero del array es '+ max);