(Can I Use - verificar code js para diferentes navegadores)[https://caniuse.com/?search=const]
(Babel - compilador para transforma novos códigos Javascript para navegadores antigos)[https://babeljs.io/]

### package.json - npm init -y
* O arquivo package.json gerencia todos os pacotes do node 

### Babel - npm install --save-dev @babel/cli @babel/preset-env @babel/core
* Para instalar o babel em outra versão basta color o `@` no final de cada cmd EX:
```bash
... @babel/preset-env@7.6.4 ...
``` 
* Para transforma o seu código javascript com o babel basta digitar o comando abaixo:
```bash
npx babel nomeDoArquivo.js -o bundle.js --presets=@babel/env
```
* O `-o` define qual é o arquivo de saída no caso demos o nome de `bundle.js`
* Para transforma os arquivos precisamos passar um preset no caso `--presets=@babel/env`
* Agora quando for usar em algum html lincar o bundle.js com o html
> Dica: Para não precisar digitar esse comando todas que precisar executar basta criar um script dentro do arquivo `package.json`. Exemplo:
```json
"scripts": {
  "babel": "babel main.js -o bundle.js --presets=@babel/env -w"
},
```
* Note que usamos um novo flag `-w` isso serve para que todas vez que salvarmos o arquivo ele automaticamente irar compilar.
* Para executar o comando acima basta digitar no terminal
```npm
npm run babel
```  

### .gitignore
* Esse arquivo ignora pasta ou outros arquivos para não ir ao repositório github
* Por exemplo digitar dentro desse arquivo `node_modules` para o arquivo do node não ir para o repositório

> ## Lembrando que essa forma de utilização é a mais antiga existe maneiras mais simples que de grande agilidade por exemplo a utilização do `WebPack` e o webpack pode ser usado não só para Javascript mas também para css sass...
