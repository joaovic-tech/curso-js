const { cpfs, cpfs2, ips } = require('./base');

const cpfRegex = /\d{3}.\d{3}.\d{3}-\d{2}/g;
const ipRegex = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

const execRegex = (regex, string) => string.match(regex);
const printRegex = (regex, string) => console.log(execRegex(regex, string));

console.log('------ CPF 1 ------');
printRegex(cpfRegex, cpfs);
console.log('------ CPF 2 ------');
printRegex(cpfRegex, cpfs2);
console.log('------  IP  ------');
printRegex(ipRegex, ips);