O express é inteiro baseado em Middlewares 
* O Express é uma estrutura web de roteamento e middlewares que tem uma funcionalidade mínima por si só: Um aplicativo do Express é essencialmente uma série de chamadas de funções de middleware.

O que é uma função middleware?
* Resultado de imagem para express middleware
Funções de Middleware são funções que tem acesso ao objeto de solicitação ( req ), o objeto de resposta ( res ), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente denotada por uma variável chamada next.