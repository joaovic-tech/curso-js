### Comando utilizado
```npm
npm i -save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2
```
(Site do Webpack)[https://webpack.js.org/]

### Na outra aula foi apagado as dependências regenerator-runtime core-js e colocado essas abaixo:
```bash
npm i core-js regenerator-runtime
```
### para a estilização foi feita uma modificação no arquivo `webpack.config.js` e depois instalados as dependências abaixo:
```bash
npm i style-loader css-loader
```

### Pasta src
* Essa pasta contem todo o código fonte

### Pasta public
* Essa pasta public serve para o mesmo objetivo que é manter e servir arquivos estáticos (html, css, js, fonts, imagens, etc).

### Arquivo webpack.config.js
```js
// criando um path(caminho)
const path = require('path'); // CommonJS

module.exports = {
  mode: 'development', // Mode de desenvolvimento
  entry: './src/index.js', // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js' // Arquivo de saída onde vão os códigos compilados
  },
  module: {
    rules: [{
      exclude: /node_modules/, // irar excluir o arquivo node para o webpack não ficar analisando a pasta do node
      test: /\.js$/, // Serve para o webpack analisar os arquivos js para transforma na quele bundle 
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        } // contem as presets que no caso é só uma
      } // Define qual loader irar usar
    }] // rules -> regras
  },
  devtool: 'source-map' // Faz um mapeamento de erros para mostrar onde estão os arquivos de erros
};
```

### Dica de terminal
* Com o comando `timeout` podemos inserir tempo de execução da nossa aplicação

(Mais informações para organização de pasta node)[https://udgwebdev.github.io/organizando-uma-aplicacao-nodejs/]
