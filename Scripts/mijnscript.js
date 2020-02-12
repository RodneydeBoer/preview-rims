var nextKnop = document.querySelector('button.vooruit');
var backKnop = document.querySelector('button.terug')
var velgfoto1 = document.querySelector('img.foto');
var velgfoto2 = document.querySelector('img.foto2');
var velgfoto3 = document.querySelector('img.foto3');
var velgfoto4 = document.querySelector('img.foto4');
var velgfoto5 = document.querySelector('img.foto5');
var velgfoto6 = document.querySelector('img.foto6');
var alfaromeo = document.querySelector('img#alfa-auto');
var lamborghini = document.querySelector('img#lambo-auto');
var porsche = document.querySelector('img#porsche-auto');
var spinknop = document.querySelector('.customizer button.draaiknop');
var velgstatus = 'uit';
var fotos = ['Velg1.png', 'Velg2.png', 'Velg3.png', 'Velg4.png', 'Velg5.png', 'Velg6.png', 'Velg7.png', 'Velg8.png']
var paginanummer = 1;
var maxPaginaNr = fotos.length;
var groenknop = document.querySelector('button.groen');
var roodknop = document.querySelector('button.rood');
var geelknop = document.querySelector('button.geel');
var blauwknop = document.querySelector('.blauw');
var huidigSpan = document.querySelector('span.huidig');
var maxSpan = document.querySelector('span.max');
var velglinks = document.querySelector('img#velglinks');
var velgrechts = document.querySelector('img#velgrechts');
var auto = document.querySelector('.tabcontent img');



function openCar(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";

velgfoto1.src =  'images/Velgen/' + fotos[0];
velgfoto2.src =  'images/Velgen/' + fotos[0];
velgfoto3.src =  'images/Velgen/' + fotos[0];
velgfoto4.src =  'images/Velgen/' + fotos[0];
velgfoto5.src =  'images/Velgen/' + fotos[0];
velgfoto6.src =  'images/Velgen/' + fotos[0];
rijden();


}

function rijden(event){
alfaromeo.classList.add("rijdenauto");
lamborghini.classList.add("rijdenauto");
porsche.classList.add("rijdenauto");
velgfoto1.classList.add("rijden");
velgfoto2.classList.add("rijden");
velgfoto3.classList.add("rijden");
velgfoto4.classList.add("rijden");
velgfoto5.classList.add("rijden");
velgfoto6.classList.add("rijden");

}
// Velgen
function volgendeVelg (event){
paginanummer = paginanummer + 1;
if (paginanummer > 8){
paginanummer = 1;
}
velgfoto1.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto2.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto3.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto4.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto5.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto6.src =  'images/Velgen/' + fotos[paginanummer - 1];
 huidigSpan.textContent = paginanummer ; 
maxSpan.textContent = maxPaginaNr
}
function vorigeVelg (event){
paginanummer = paginanummer - 1;
if (paginanummer < 1){
paginanummer = 8;
}
velgfoto1.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto2.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto3.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto4.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto5.src =  'images/Velgen/' + fotos[paginanummer - 1];
velgfoto6.src =  'images/Velgen/' + fotos[paginanummer - 1];
huidigSpan.textContent = paginanummer ; 
maxSpan.textContent = maxPaginaNr
}

// Auto kleuren
function rood(event){
alfaromeo.src =  'images/Alfa/alfa-rood.png';
lamborghini.src =  'images/Lambo/lambo-rood.png';
porsche.src =  'images/Porsche/porsche-rood.png';
}
function geel (event){
alfaromeo.src =  'images/Alfa/alfa-geel.png';
lamborghini.src =  'images/Lambo/lambo-geel.png';
porsche.src =  'images/Porsche/porsche-geel.png';
}
function groen (event){
alfaromeo.src =  'images/Alfa/alfa-groen.png';
lamborghini.src =  'images/Lambo/lambo-groen.png';
porsche.src =  'images/Porsche/porsche-groen.png';
}
function blauw (event){
alfaromeo.src =  'images/Alfa/alfa-blauw.png';
lamborghini.src =  'images/Lambo/lambo-blauw.png';
porsche.src =  'images/Porsche/porsche-blauw.png';
}
function startstop (event){
if (velgstatus != 'aan') {
velgfoto1.classList.add("rotate")
velgfoto2.classList.add("rotate")
velgfoto3.classList.add("rotate")
velgfoto4.classList.add("rotate")
velgfoto5.classList.add("rotate")
velgfoto6.classList.add("rotate")
velgstatus = 'aan';
console.log("Draaiende");
}
else {
console.log("Staat stil");

velgfoto1.classList.remove("rotate")
velgfoto2.classList.remove("rotate")
velgfoto3.classList.remove("rotate")
velgfoto4.classList.remove("rotate")
velgfoto5.classList.remove("rotate")
velgfoto6.classList.remove("rotate")
velgfoto1.classList.remove("rijden");
velgfoto2.classList.remove("rijden");
velgfoto3.classList.remove("rijden");
velgfoto4.classList.remove("rijden");
velgfoto5.classList.remove("rijden");
velgfoto6.classList.remove("rijden");
velgstatus = 'uit';
}
}
// Houdt eerste tabblad standaard open
document.getElementById("defaultOpen").click();
// Kleurkiezer
roodknop.addEventListener('click', rood);
blauwknop.addEventListener('click', blauw);
groenknop.addEventListener('click', groen);
geelknop.addEventListener('click', geel);
// Laat wielen draaien
spinknop.addEventListener('click', startstop);
// Velgkiezers
nextKnop.addEventListener('click', volgendeVelg);
backKnop.addEventListener('click', vorigeVelg);