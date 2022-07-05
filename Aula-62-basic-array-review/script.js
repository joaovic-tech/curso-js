// outro jeito de criar array
const objetos = new Array('Relógio', 'Perfume', 'Caixa de Som');
// Valor por referencia
// Rest Operator
// Desse jeito vc pode alterar o array grupo1 sem alterar a variável grupo2
const grupo1 = ['Eduardo', 'Maria', 'Joana'];
const grupo2 = [...grupo1];

grupo1.push('Ronaldinho'); // Adiciona um item
grupo1.unshift('Ronaldinho'); // Adiciona um item no inicio
const removerNomeFim = grupo2.pop(); // remove do final
const removerNomeInicial = grupo2.shift(); // remove do final
// console.log(`grupo1 tem ${grupo1.length} pessoas`);
// console.log(`grupo2 tem ${grupo2.length} pessoas`);

const dados = ['João Victor', '18 anos'];
const dado = dados.slice(','); // separa elementos da string
const agrupar = dados.join(' '); // Agrupa elementos da string
console.log(agrupar);
