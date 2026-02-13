function calcular() {

let capital = Number(document.getElementById("capital").value);
let riesgo = Number(document.getElementById("riesgo").value);
let recompensa = Number(document.getElementById("recompensa").value);
let stop = Number(document.getElementById("stop").value);
let pip = Number(document.getElementById("pip").value);

if(!capital || !riesgo || !recompensa || !stop || !pip){
alert("Llena todos los campos");
return;
}

let dineroRiesgo = capital * (riesgo / 100);
let ganancia = capital * (recompensa / 100);

let lotes = dineroRiesgo / (stop * pip);

document.getElementById("resultado").innerHTML =
"💸 Riesgo: $" + dineroRiesgo.toFixed(2) +
"<br>💰 Ganancia esperada: $" + ganancia.toFixed(2) +
"<br>📐 Lotes recomendados: " + lotes.toFixed(2);

}
