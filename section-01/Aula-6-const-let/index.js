/* Atividade tera que aparecer dessa forma no console:
João Victor Alves tem 18 anos, pesa 75kg
tem 1.70 de altura e seu IMC é de 25.95155709342561
João Victor nasceu em 1980
*/
const nome = 'João Victor';
const sobrenome = 'Alves';
const idade = 18;
const peso = 75;
const alturaEmM = 1.70;
let índiceMassaCorporal; // Formula do IMC => peso / (altura * altura)
let anoNascimento;

índiceMassaCorporal = peso / (alturaEmM * alturaEmM); // Calculo do IMC

const date = new Date(); // Pegando o ano atual
const anoAtual = date.getFullYear();
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${índiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
