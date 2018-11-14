var hs = document.querySelectorAll("h1");
hs.forEach(function(e,i){e.innerHTML="jesus 2"+i});
var cuadrado = document.querySelector(".cuadrado");
var flag = true;
var count = 1 ;
function rojo(){
    
hs.forEach(function(e){

    e.style.color = flag ? "red":"blue";
    flag = !flag;

});
cuadrado.style.borderRadius = flag? "50%":"0%";
cuadrado.style.background  = flag ? "blue":"red";

flag = !flag;
count++;
}
