let slidesColaboradores = document.getElementsByClassName("colaboradores");

let indiceSlide = 1;

CarrosselGaleria(indiceSlide);

function ProximoSlide(valor) {
    CarrosselContatos(indiceSlide += valor)
}


function CarrosselContatos(valor) {




    if (valor > slidesColaboradores.length) {
        indiceSlide = 1;
    }

    if (valor < 1) {
        indiceSlide = slidesColaboradores.length
    }

    for (let i = 0; i < slidesColaboradores.length; i++) {
        slidesColaboradores[i].style.display = "none";
    }

    slidesColaboradores[indiceSlide - 1].style.display = "block"
}

