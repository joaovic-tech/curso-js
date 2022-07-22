# NPM - Node Package Manager
* Como o nome já diz o npm é um gerenciador de pacotes para o Node.JS 

## Sobre essa aula
* Aula para instalar e desinstalar pacotes mais comandos utilizando npm

## Pacotes instaldos
* Express


## instalando exemplo com o express

## Instalando
```bash
npm install express
```
## Desinstalando
```bash
npm uninstall express
```

No arquivo package na versão do express temos um `^` + Número da versão, isso significa que quando o express fizer uma atualização, automaticamente o código irar atualizar para a ultima versão

> Se por acaso não quer que atualize sozinho, na hora de instalar o express basta colocar depois um `-E`. Exemplos:

```bash
npm i express -E
```
Com isso irar sumir o `^`

## Atualizar todos os pacotes
```bash
npm update
```

## Dependências de desenvolvimento/produção

Para instalar um pacote para `DevDependencies` basta color u `--save-dev` depois do comando de instalação e para colocar como `dependencies` é so não color a flag `save-dev`.

Exemplo para mover/instalar como `DevDependencies`:
```bash
npm i express --save-dev
```
Exemplo para mover/instalar como `Dependencies`:
```bash
npm i express --save-prod
```

## Instalar com uma determinada versão
* O nomeDoPacote@ + versão desejada
```bash
npm i express@2.1.0
```

## Explicando número de versão
> Vamos pegar uma versão assim: 2.1.0

* 2 -> major - Mexe com a aplicação toda (perigo, pois pode quebrar com versão mais antigas)
* 1 -> minor - Recursos novos
* 0 -> patch - Correção de bugs

## versão de pacote com o `^`
> No arquivo package.json quando temos na versão do pacote um `^` e fizéssemos um `npm update` atualizamos o minor e o patch
* Quando temos um `~` é só irar mexer com o patch 

## Comando .x
* Esse comando atualiza um pacote na sua ultima versão a parti de um número. Por exemplo:

> `npm i express4.x` irar atualizar n ultima versão do major do número 4 exemplo (4.18.1)

## Comando para ver todos os pacotes instalados no package.json

Listar somente nome do pacote
```bash
npm ls --depth=0
```

Irar li o nome do pacote e tudo que contém no pacote.
```bash
npm ls
```
ou
```bash
npm ls --depth=1
```
## Para ver qual pacote está desatualizado
```bash
npm outdated
```
