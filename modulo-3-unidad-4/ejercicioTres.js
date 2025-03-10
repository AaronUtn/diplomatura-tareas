

var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];



const aprobados = alumnos.filter(alumno=>alumno.nota > 5);
console.log(aprobados);

let mensajeDos = 'alumnos aprobados: \n';
aprobados.forEach(est=>{
    mensajeDos += 'Alumno: '+est.nombre+', '+est.nota+'\n';
});
document.getElementsByName('mostrar')[0].value = mensajeDos;

/*
aprobados.forEach(est=>{
    mensajeDos += `Alumno:${est.nombre}, Nota:${est.nota}\n`;
});
alert(mensajeDos);
*/ 




