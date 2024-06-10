// ASA DE MORCEGO
qtdAsaMorcego = localStorage.getItem("asaMorcego");
console.log(qtdAsaMorcego);
if(qtdAsaMorcego > 0) {
    document.getElementById("AsaMorcego").style.display = "block";
    document.getElementById("qtdNumero").innerHTML = qtdAsaMorcego;
    document.querySelector(".preco").innerHTML = calculoPreço

}

qtdCapaInvisivel = localStorage.getItem("CapaInvisivel");
console.log(qtdCapaInvisivel);
if(qtdCapaInvisivel > 0) {
    document.getElementById("CapaInvisivel").style.display = "block";
    document.getElementById("qtdNumero").innerHTML = qtdCapaInvisivel;
    document.querySelector(".preco").innerHTML = calculoPreço

}
