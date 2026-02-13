function calcular() {

let capital = parseFloat(document.getElementById("capital").value);
let riesgo = parseFloat(document.getElementById("riesgo").value);
let recompensa = parseFloat(document.getElementById("recompensa").value);

let dineroRiesgo = capital * (riesgo / 100);
let ganancia = capital * (recompensa / 100);

document.getElementById("resultado").innerHTML =
"Riesgo: $" + dineroRiesgo.toFixed(2) + "<br>Ganancia: $" + ganancia.toFixed(2);

}
