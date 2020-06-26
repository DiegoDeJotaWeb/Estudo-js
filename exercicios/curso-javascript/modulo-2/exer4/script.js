//4º exercício
//Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
//
//Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
//nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
//demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.


function adicionar(){
    addNome = document.querySelector('input').value;
    teste = nomesAll(addNome);
    
    
}



var appElement = document.querySelector('#app');

var tableElement = document.createElement('table');
appElement.appendChild(tableElement);

var tableUl = document.createElement('ul');
tableElement.appendChild(tableUl);


function nomesAll(nomes,addNome) {
    
    for (let value of nomes) {
        var tableLi = document.createElement('li');
        tableUl.appendChild(tableLi);
        var textoElement = document.createTextNode(value);
        tableLi.appendChild(textoElement);      
        console.log(value);
    }   
}


var nomes = ['Diego', 'Gabriel', 'Lucas'];
nomesAll(nomes);


