// for classic
//      i - index
for(let i = 400; i<=500; i += 10){
  console.log(`Linha ${i}`);
}

for (let i = 0; i<= 10; i++){
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}

const frutas = ['Maçã', 'Pera', 'Uva', 'Banana', 'Mamão', 'Limão', 'Manga', 'Tomate'];

for (let i = 0; i < frutas.length; i++){
  console.log(`Índice ${i}: ${frutas[i]}`);
}