//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
//e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
// let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of skills) {
//  console.log(value);
//    if(value == "Javascript"){
//        console.log(value + " " + true);
//    }
    
    skill = skills.indexOf("Javascript");
//    console.log(skill); 
    resultado = skills[skill];
//    console.log(resultado);
//    
    if(resultado == "Javascript"){
      console.log(true); 
    }else{
       console.log(false);  
    }
    

}

}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false


//Dica: para verificar se um vetor contém um valor, utilize o método indexOf