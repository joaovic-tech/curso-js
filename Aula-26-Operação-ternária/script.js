/* 
A operação ternária é a mesma coisa do (if e else) - sozinhos só os dois
(condição) ? 'Valor para true' : 'Valor para false'
*/
// Exemplos
const userPointer = 1000;
const levelUser = userPointer >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const userColor = 'Pink';
const defaultColor = userColor || 'Preta';

console.log(levelUser, defaultColor);
