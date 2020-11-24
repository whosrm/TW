window.onload = main;

function main(){
    myChangeFigcaption();
    myalert();
}

function myalert() {
    alert("Hello! Welcome to my first page!!");
}

var linkuri = ["https://eu.morphe.com/products/the-james-charles-palette",
             "https://www.notino.ro/makeup-revolution/soph-x-extra-spice-paleta-farduri-de-ochi-cu-oglinda-mica/p-15719521/?gclid=CjwKCAiA-_L9BRBQEiwA-bm5fnGzKa3SYF7jcLEx3b6IF8FbJ6zRcuAHqI3K2GUdQA5cc_tRAaNsEhoCrrQQAvD_BwE",
             "https://www.sephora.ro/machiaj/truse-seturi/ochi/naked-3-eyeshadow-palette-paleta-farduri-de-pleoape-283156.html",
             "https://www.sephora.ro/machiaj/truse-seturi/ochi/naked-heat-palette-paleta-farduri-de-pleoape-402508.html",
             "https://www.sephora.ro/machiaj/truse-seturi/ochi/natural-matte-palette-437135.html"]
function myChangeFigcaption(){
    var figcaptions = document.getElementsByTagName("figcaption");
    for(let i = 0; i < figcaptions.length; i++){
        figcaptions[i].style.cursor = "pointer";
        figcaptions[i].onclick = function(){
            window.open(linkuri[i], "_self");
            
        }
    }
}
