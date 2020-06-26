//1º exercício
//Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
//vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
//aparecer na tela


var btnElement = document.querySelector('button.btn');

btnElement.onclick = function(){
    
    var appQuadrado = document.querySelector('#app');
    
    var quadrado = document.createElement('div');
    
    appQuadrado.appendChild(quadrado);
    
   
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = "red";
    quadrado.style.float = "left";
    quadrado.style.marginRight = "10px";
    
    
    
    
    console.log("ei");
    
    
}