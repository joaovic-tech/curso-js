## Tags do EJS
* <%  %> - Controle de fluxo (if, for...)
* <%= %> - Imprime escapando caracteres
* <%- %> - Imprime sem escapar caracteres
* <%# %> - Comentário
* <%- include('caminho/arquivo') %>

> Exemplo de controle de fluxo

```ejs
<% if(condition) { %>
  <%= userName %>
<% } else { %>
  Este usuário não existe
<% } %>
```
