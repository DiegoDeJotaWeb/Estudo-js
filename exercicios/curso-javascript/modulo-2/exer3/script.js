//3º exercício
//A partir do seguinte vetor:
//var nomes = ["Diego", "Gabriel", "Lucas"];
//Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
//● Diego
//● Gabriel
//● Lucas

var appElement = document.querySelector('#app');

var tableElement = document.createElement('table');
appElement.appendChild(tableElement);

var tableUl = document.createElement('ul');
tableElement.appendChild(tableUl);


function nomesAll(nomes) {
    for (let value of nomes) {
        var tableLi = document.createElement('li');
        tableUl.appendChild(tableLi);
        var textoElement = document.createTextNode(value);
        tableLi.appendChild(textoElement);

    }

}
var nomes = ['Diego', 'Gabriel', 'Lucas'];
nomesAll(nomes);
