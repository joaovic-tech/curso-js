/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />

console.log(MyNamespace.otherNamespace);
console.log(person1);
console.log(MyNamespace.otherNamespace.person);

// para funcionar dessa forma devemos mudar o compilador pois do jeito que está gera erro durante a execução
