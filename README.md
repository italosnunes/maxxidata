# Maxxidata fullstack

Este projeto foi desenvolvido com intuito de ser avaliado durante processo de seleção da empresa.

Abaixo segue instruções de como rodar o backend, frontend e mobile.

## Backend

Optamos por utilizar o Javascript com typescript. Acredito que a tipagem de dados é muito importante principalmente no backend. Banco de dados utilizei o `postgres` e para documentação foi utilizado o `swagger`.

### Instruções

Com o docker devidamente configurado com imagem `postgres`, crie um banco de dados chamado `maxxidata` com as seguintes configurações:
`porta: 5432, username: "postgres", "password": "docker"`

Em seguida:

1. acesse a pasta `cd backend`
2. execute o `yarn` para instalar as bibliotecas
3. execute `yarn migration:run` para configurar as tabelas e relacionamentos no banco de dados.
4. para rodar o servidor execute `yarn dev:server``
5. para visualizar a documentação execute `yarn documentation` 

Obs: Não foi desenvolvido os testes por não dominar a ferramenta apesar de já ter utilizado o `jest` e também por falta de tempo para dar lida na documentação.

## Frontend

Frontend desenvolvido com ReactJs

### Instruções

1. acesse a pasta `cd frontend`
2. execute o `yarn` para instalar as bibliotecas
3. execute o `yarn start`

## Mobile

Versão mobile desenvolvido com React Native

### Instruções

1. acesse a pasta `cd mobile`
2. execute o `yarn` para instalar as bibliotecas
3. caso esteja no ios, acesse a pasta `ios` e em seguida execute o  `pod install`
4. na pasta mobile, execute `yarn ios` ou `yarn android` dependendo do simulador que estiver utilizando.