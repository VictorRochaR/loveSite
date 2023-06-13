btns = document.querySelector(".btnSim");
btnn = document.querySelector(".btnNao");
toHide = document.querySelector("#toHide");
img = document.querySelector("img");

function sim() {
    btns.remove();
    btnn.remove();
    toHide.innerHTML = "LOVE";
    img.style.visibility = "visible";
}

function saiprala(btn) {
    btn.style.position = 'absolute';
    btn.style.top = geraPosicao(10, 80);
    btn.style.left = geraPosicao(10, 80);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}   