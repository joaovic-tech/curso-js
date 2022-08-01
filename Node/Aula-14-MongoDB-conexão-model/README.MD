Antes de iniciar essa aula teve um video do professor ensinando a criar um servidor Cloud usando o MongoDB Atlas.

[MongoDB - Atlas](https://www.mongodb.com/cloud/atlas/)

Arquivo homeController.js
```js
const HomeModel = require('../models/HomeModel');

// Criar na base de dados
HomeModel.create({
  titulo: 'Um título qualquer',
  descricao: 'Uma descrição.'
})

// procura na base de dados
HomeModel.find()
  .then(dados => console.log(dados))
  .catch(e => console.log(e));
```
