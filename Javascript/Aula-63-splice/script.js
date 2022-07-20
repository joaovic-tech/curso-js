// o splice é mai usado quando se quer modificar partes especificas do array

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// índice - posição do elemento do array pode ser tanto positivo como negativo
// delete - quantos elemento vão ser deletado
// elem - Caso queira adicionar elementos,
// elem - se o delete for zero ele adicionar sem remover se não ele adiciona no lugar do índice passado

// nomes.splice(índice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(3, 2, 'Luiz', 'Toni');
console.log(nomes, removidos);

nomes.splice(-1, 1); // simulando o pop que remove o ultimo elemento
console.log(nomes);

nomes.splice(0, 1); // simulando o shift que remove o primeiro elemento
console.log(nomes);
