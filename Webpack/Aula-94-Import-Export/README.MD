### Import - Export
#### Para saber mais sobre Export e Import ver a documentação da MDN.
1. (Import)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import]
2. (Export)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export]

### Export default
#### !Nota: Em cada arquivo podemos ter apena um default
* quando temos um default isso significa que ao importar por exemplo uma `function` executar ele com qualquer nome e ela vai ser executada pois ele está definida como default. Ex:
```js
// Em um arquivo js
export function soma(x, y) {
  return x + y
}
// Outro arquivo js
import calc from './modulo.js' // nome de um arquivo js acima
console.log(calc(5, 5));
```
> Nesse exemplo temos uma função que está sendo export por padrão(default), e ao executar ela em outro arquivo com outro nome é realizado o calculo, isso acontece pois o Javascript identifica que tem uma função default e pega ela e a executa.

> Dica: Se existe variáveis de import ou export do mesmo nome basta acrescentar um `as` depois do nome de uma das variáveis. Por exemplo:
```js
import { nome as nomeDeSubstituição, sobrenome }
// Ou
export { nome as nomeDeSubstituição, sobrenome }
```
* Com isso podemos exportar ou importar variáveis com nomes diferentes