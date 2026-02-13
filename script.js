function calcular() {

let capital = Number(document.getElementById("capital").value);
let riesgo = Number(document.getElementById("riesgo").value);
let recompensa = Number(document.getElementById("recompensa").value);

if(!capital || !riesgo || !recompensa){
alert("Llena todos los campos");
return;
}

let dineroRiesgo = capital * (riesgo / 100);
let ganancia = capital * (recompensa / 100);

document.getElementById("resultado").innerHTML =
"💸 Riesgo: $" + dineroRiesgo.toFixed(2) +
"<br>💰 Ganancia esperada: $" + ganancia.toFixed(2);

}
