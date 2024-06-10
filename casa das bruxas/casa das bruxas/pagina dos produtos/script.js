


let popupAsaMorcego = document.querySelector(".divQuantidadesAsaMorcego")
let popupCapaInvisivel = document.querySelector(".divQuantidadesCapaInvisivel")



let adicionarCarrinhoAsaMorcego = document.querySelector(".carrinhoIconAsaMorcego")
let adicionarCarrinhoCapaInvisivel = document.querySelector(".carrinhoIconCapaInvisivel")



adicionarCarrinhoAsaMorcego.addEventListener("click", () => {
    let stylePopupAsaMorcego = window.getComputedStyle(popupAsaMorcego);
    let displayPopupAsaMorcego = stylePopupAsaMorcego.getPropertyValue('display');

    if(displayPopupAsaMorcego == "none"){
        popupAsaMorcego.style.display = "flex";

    }else{
        popupAsaMorcego.style.display = "none";

    }
});

adicionarCarrinhoCapaInvisivel.addEventListener("click", () => {
    let stylePopupCapaInvisivel = window.getComputedStyle(popupCapaInvisivel);
    let displayPopupCapaInvisivel = stylePopupCapaInvisivel.getPropertyValue('display');

    if(displayPopupCapaInvisivel == "none"){
        popupCapaInvisivel.style.display = "flex";

    }else{
        popupCapaInvisivel.style.display = "none";

    }
});




function enviarCarrinho() {
    let inputQuantidadeNumeroAsaMorcego = document.querySelector("#asaMorcego").value
    alert(inputQuantidadeNumeroAsaMorcego);
    localStorage.setItem(
        'asaMorcego', inputQuantidadeNumeroAsaMorcego
    )
    

}


function enviarCarrinho() {
    let inputQuantidadeNumeroCapaInvisivel = document.querySelector("#CapaInvisivel").value
    alert(inputQuantidadeNumeroCapaInvisivel);
    localStorage.setItem(
        'CapaInvisivel', inputQuantidadeNumeroCapaInvisivel
    )
    

}

