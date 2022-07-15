# Validando CPF

### cfp de exemplo
### 1º 705.484.450-52 
### 2º 070.987.720-03

### como calcular?
* pegar todos os números menos os 2 últimos
* multiplicar cada um começando do 10 até 2
* por exemplo o 1º número multiplicar por 10 o 2º por 9 e assim sucessivamente
* depois de ter multiplicado pegar cada valor dessa operação e somar
* no primeiro cpf irar ter o valor igual a 237
* diminuir 11 pelo resto da divisão de 273 resto 11
* ficaria assim => 11 - (237 % 11) que é igual a 5(primeiro valor encontrado)
* porem se esse número for maior que 9 ele se torna 0
* Como encontrar o segundo valor?
* basta calcular todos os números começando por 11 até 2
* por exemplo o 1º número multiplicar por 11...
* somar tudo (resultado = 284) e fazer a mesma operação de resto
* 11 - (284 % 11) => 2
* Pronto e o resultado for os mesmos que o número do cpf o mesmos está valido

