let video = document.getElementById("documentario");
let gridColor = document.getElementById("grid-color");
let colaboradores = document.getElementsByClassName("grid-colaboradores");
let logo = document.getElementById("logo-documentario");
let btnRetornar = document.getElementById("btn-retornar");

btnRetornar.style.display = "none";
video.style.display = "none";

function ShowVideo() {
    let btn = document.getElementById("btn-show");
    
    if(video.style.display === "none") {
        gridColor.style.display = "none";
        logo.style.display = "none";
        colaboradores[0].style.display = "none";

        btnRetornar.style.display = "block";
        btn.style.display = "none";
        video.style.display = "block";

        video.play();
    }else{
        gridColor.style.display = "flex";
        logo.style.display = "block";
        colaboradores[0].style.display = "flex";

        btnRetornar.style.display = "none";
        document.getElementById("btn-show").style.display = "block";
        
        video.style.display = "none";

        video.pause();
    }
}