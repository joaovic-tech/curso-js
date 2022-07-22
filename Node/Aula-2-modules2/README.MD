# continuação da aula 1
* `__filename` - Arquivo atual
* `__dirname` - Pasta atual

```js
console.log(__dirname);
// output:
// c:\curso-js\Node\Aula-2-modules2

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
// output:
// c:\curso-js\arquivos\imagens
```