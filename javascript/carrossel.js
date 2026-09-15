let slidesImg = document.getElementsByClassName("slide-img");
let atalhos = document.getElementsByClassName("atalhos-img")

let indiceSlide = 0;

CarrosselGaleria(indiceSlide);

function ProximoSlide(valor){
    CarrosselGaleria(indiceSlide += valor)
}

function Atalho(valor){
    CarrosselGaleria(indiceSlide = valor)

}

function CarrosselGaleria(valor){

    if(valor > slidesImg.length){
        indiceSlide = 1;
    }

    if(valor < 1){
        indiceSlide = slidesImg.length
    }

    for(let i = 0; i < atalhos.length; i++){
        atalhos[i].className = atalhos[i].className.replace(" ativo", "")
    }

    for(let i = 0; i < slidesImg.length; i++){
        slidesImg[i].style.display = "none";
    }

    slidesImg[indiceSlide - 1].style.display = "block"
    atalhos[indiceSlide - 1].className += " ativo";
}