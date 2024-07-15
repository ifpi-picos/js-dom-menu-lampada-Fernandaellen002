// Menu mobile

// Imagem 1
const imagem1 = document.getElementById("lampada-01");
const imagem2 = document.getElementById("lampada-2")
imagem1.addEventListener("click", function () {
  console.log(imagem1.src);
  if (imagem1.src.endsWith("lampada.jpg")) {
    imagem1.src = "img/lampada-on.jpg";
  } else {
    imagem1.src = "img/lampada.jpg";
  }
});

// Imagem 2

document.getElementById("lampada-2").onmouseover = function() {acender()};

function acender(){
  if (imagem2.src.endsWith("lampada.jpg")) {
    imagem2.src = "img/lampada-on.jpg";
  } else {
    imagem2.src = "img/lampada.jpg";
  }
}