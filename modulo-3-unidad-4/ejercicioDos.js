const contador = document.getElementById('contador');
const textarea = document.getElementById('texto');

textarea.addEventListener("input",function(){
 contador.textContent=textarea.value.length ;
});
