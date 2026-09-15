let indice = 1;
let imgs = document.getElementsByClassName("imgs");
let img = document.querySelectorAll("#imgs img");

function ShowImg(){

    if(indice > imgs.length)
    {
        indice = 0;
    }

    imgs.style.transform = translatex(${-img * 400}px);

} 