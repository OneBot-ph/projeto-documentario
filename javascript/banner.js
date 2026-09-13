let video = document.getElementById("documentario");
let banner = document.getElementsByClassName("banner");
let colaboradores = document.getElementsByClassName("grid-colaboradores");
let nomeDocumentario =document.getElementById("nome-documentario");

video.style.display = "none";

function ShowVideo() {
    let btn = document.getElementById("btn-show");
    
    if(video.style.display === "none") {
        banner[0].style.display = "none";
        colaboradores[0].style.display = "none";
        nomeDocumentario.style.display = "none";

        video.style.display = "block";
        btn.innerHTML = "&#10146;&#65039;";
        btn.style.opacity = 0.5
    }else{
        banner[0].style.display = "block";
        colaboradores[0].style.display = "flex";
        nomeDocumentario.style.display = "block";

        video.style.display = "none";
        btn.innerHTML = "&#10146;&#65039;";
        btn.style.opacity = 1
    }
}