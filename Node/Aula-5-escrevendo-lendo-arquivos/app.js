const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
  { nome: 'João', idade: 18 },
  { nome: 'Maria', idade: 31 },
  { nome: 'Eduardo', idade: 22 },
  { nome: 'Luíza', idade: 24 },
];

const json = JSON.stringify(people, '', 2);
// write(filePath, json);

async function readFile(path) {
  const datas = await read(path);
  return renderData(datas);
}

function renderData(datas) {
  datas = JSON.parse(datas);
  datas.forEach(val => console.log(val));
}
readFile(filePath);
