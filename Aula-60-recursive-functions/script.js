// Uma função recursiva é uma função que chama a si mesma até que seja interrompida

function recursiva(max) {
  console.log(max);
  if (max >= 100) return;
  max++
  recursiva(max);
}

recursiva(0);
