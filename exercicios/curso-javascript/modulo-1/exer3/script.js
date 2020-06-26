function experiencia(anos) {
  if(anos >= 0 && anos <= 1){
      console.log('De 0-1 ano: Iniciante');
  }
    if(anos <= 3){
      console.log('De 1-3 anos: Intermediário');
  }
    if(anos > 3 && anos <= 6){
      console.log('De 3-6 anos: Avançado');
  }
    if(anos >=7){
      console.log('De 7 acima: Jedi Master');
  }
    
    
}
var anosEstudo =3;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

