//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];


// formas de adicionar elementos no array
alunos.unshift('Fábio'); // Adiciona no começo 
alunos.push('Luíza'); // Adiciona no fim
alunos[alunos.length] = 'Luana'; // Adiciona no fim
alunos[3] = 'Gabriel'; // Adiciona no fim

alunos[0] = 'Eduardo'; // Altera
console.log(alunos[0]); // Exibir o índice 0

// Remove o índice e o elemento
alunos.shift(); // remove o primeiro elemento do array
alunos.pop(); // remove o ultimo elemento do array

// Remove apenas o elemento
delete alunos[1];

console.log(alunos.slice(0, -2)); // Fatiar o array 

// verifica se a instancia do alunos é realmente um array
// Retorna true ou false
console.log(alunos instanceof Array); 