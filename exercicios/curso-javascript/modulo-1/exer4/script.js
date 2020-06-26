var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", " ReactJS", " Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];


console.log();

console.log("O "+ usuarios[0].nome +  " possui as habilidades: " + usuarios[0].habilidades );

console.log("O "+ usuarios[1].nome +  " possui as habilidades: " + usuarios[1].habilidades );


let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of usuarios) {
  console.log(value);
}


console.log(usuarios.join());

