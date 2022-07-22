# Express

É o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:

* Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
* Integrar "view engines" para inserir dados nos templates.
* Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
* Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

## Criando uma rota
```js
app.get('/', (req, res) => {
  res.send('Hello world!');
});
```
> req -> requisição -> refere a oque estou pedidedo
> Nesse caso o "usuário" fez uma requisição get. <br>
> res -> resposta -> Depois que o cliente fizer uma requisição 
> o servido irar entregar uma resposta.


## Porta
Uma porta é referente a um processo que está sendo executado no seu servidor, Isso significa que se houver algo rodando em uma determinada porta no seu servidor e voce tentar iniciar o express nessa porta ele não irar iniciar e vai dar um erro de posta. Por isso é bom utilizar porta que geralmente não são utilizadas por exemplo: 3000, 3333...