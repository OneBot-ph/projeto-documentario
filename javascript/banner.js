let video = document.getElementById("documentario");
let banner = document.getElementsByClassName("banner");
let colaboradores = document.getElementsByClassName("grid-colaboradores");
let nomeDocumentario =document.getElementById("nome-documentario");
let btnRetornar = document.getElementById("btn-retornar");

btnRetornar.style.display = "none";
video.style.display = "none";

function ShowVideo() {
    let btn = document.getElementById("btn-show");
    
    if(video.style.display === "none") {
        banner[0].style.display = "none";
        colaboradores[0].style.display = "none";
        nomeDocumentario.style.display = "none";
        
        btnRetornar.style.display = "block";
        document.getElementById("btn-show").style.display = "none";
        video.style.display = "block";
    }else{
        banner[0].style.display = "block";
        colaboradores[0].style.display = "flex";
        nomeDocumentario.style.display = "block";

        btnRetornar.style.display = "none";
        document.getElementById("btn-show").style.display = "block";
        
        video.style.display = "none";
    }
}