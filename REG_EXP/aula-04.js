const { html } = require('./base');

const regExpGreedy = /<.+>.+<\/.+>/g;
const regExpNoGreedy = /<.+?>.+?<\/.+?>/g;

console.log(html.match(regExpGreedy), 'greedy');
console.log(html.match(regExpNoGreedy), 'no greedy');