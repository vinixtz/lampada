function ON(){
    document.getElementById("lampada").src = "ligada.png";
    document.body.style.backgroundColor = "black"
    document.h1.style.color = "white"
 }
 function OFF(){
     document.getElementById("lampada").src = "desligada.png";
     document.body.style.backgroundColor = "white"
     document.h1.style.color = "black"
 }
 function QUEBRA(){
     document.getElementById("lampada").src = "quebrada.png";
 }
 function PISCA(){
     let intervalo = 0;
     let contador = 0;
     while (contador < 10) {
         intervalo +=300; 
         setTimeout(function(){
             document.getElementById('lampada'). src = 'ligada.png';
             document.body.style.backgroundColor = "white"
         }, intervalo);
 
         intervalo += 300;
         setTimeout(function(){
             document.getElementById('lampada'). src = 'desligada.png'
             document.body.style.backgroundColor = "black"
         }, intervalo);
         contador++;
     }
 }
 let lampada = document.getElementById('lampada');
 
 lampada.addEventListener('mouseover', ON)
 lampada.addEventListener('mouseleave', OFF)
 lampada.addEventListener('dblclick', QUEBRA)
 