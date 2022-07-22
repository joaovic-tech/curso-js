```js
const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '..', 'teste.txt');

//              1          2             3              4   
fs.writeFile(filePath, 'Frase 1\n', { flag: 'a', encoding: 'utf-8' });
/*
1 - Caminho do arquivo
2 - Conteúdo do arquivo
3 - Apagar oque tiver lá dentro com o valor 'w' ou não com o valor 'a'
4 - Codificação dos caracteres o padrão é utf-8
*/

```