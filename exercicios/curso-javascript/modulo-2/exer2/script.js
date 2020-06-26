//2 exercício
//Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
//algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:




function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
    
}
var newColor = getRandomColor(); // #E943F0




var btnElement = document.querySelector('button.btn');

btnElement.onclick = function(){
    
    var appQuadrado = document.querySelector('#app');
    
    var quadrado = document.createElement('div');
    
    appQuadrado.appendChild(quadrado);
    
   
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = 'red';
    quadrado.style.float = "left";
    quadrado.style.marginRight = "10px";
        
    quadrado.onmouseover = function(){
         quadrado.style.backgroundColor = newColor;
    }
    
    newColor = getRandomColor();
}