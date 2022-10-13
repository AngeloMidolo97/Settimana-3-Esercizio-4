var frase1 = "sto imparando javascript";

//INIZIO ESERCIZIO 1

document.getElementById("maiuscola").innerHTML = frase1.toUpperCase();
document.getElementById("minuscola").innerHTML = frase1.toLowerCase();
document.getElementById("strArray").innerHTML = frase1.split("");

var caratteri =
  frase1.charAt(2) + frase1.charAt(1) + frase1.charAt(14) + frase1.charAt(18);
document.getElementById("estraiCaratteri").innerHTML = caratteri;

document.getElementById("concatena").innerHTML = frase1.concat(" JS");

document.getElementById("estraiStringa").innerHTML = frase1.slice(5, 9);

//FINE ESERCIZIO 1

//INIZIO ESERCIZIO 2

var arrayPersone = ["Giovanni", "Carla", "Piero", "Mirtilla"];

document.getElementById("array").innerHTML = arrayPersone;
document.getElementById("lunghezza").innerHTML = arrayPersone.length;
document.getElementById("elemento").innerHTML = arrayPersone[2];

var modifica = arrayPersone.splice(2, 1, "Massimo");
document.getElementById("modificato").innerHTML = arrayPersone;

document.getElementById("ultimo").innerHTML = arrayPersone.pop();

//FINE ESERCIZIO 2

//INIZIO ESERCIZIO 3

const eta = [2001, 1990, 1987, 2018, 2010];
const anno = 2022;

calcolaEta(eta, anno);
function calcolaEta(eta, anno) {
  var array = [
    anno - eta[0],
    anno - eta[1],
    anno - eta[2],
    anno - eta[3],
    anno - eta[4],
  ];
  document.getElementById("eta1").innerHTML += `${anno - eta[0]} anni`;
  document.getElementById("eta2").innerHTML += `${anno - eta[1]} anni`;
  document.getElementById("eta3").innerHTML += `${anno - eta[2]} anni`;
  document.getElementById("eta4").innerHTML += `${anno - eta[3]} anni`;
  document.getElementById("eta5").innerHTML += `${anno - eta[4]} anni`;
  document.getElementById("arrayEta").innerHTML += array;
}

//FINE ESERCIZIO 3

//INIZIO ESERCIZIO 4

var animali = ["coniglio", "cane", "gatto", "criceto"];

document.getElementById("intero").innerHTML = animali;

animali.push("leone");
document.getElementById("aggiunto").innerHTML = animali;

document.getElementById("estratto").innerHTML = animali.slice(0, 4);

document.getElementById("verifica1").innerHTML = animali.includes("coniglio");
document.getElementById("verifica2").innerHTML = animali.includes("topo");

//FINE ESERCIZIO 4
