## Projeto Desafio Back-end


#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - Programação orientada a objetos;
  - Desenvolvimento de testes unitários.

#### Tecnologias utilizadas:

  - TypeScript;
  - Nest.js;
  - MondoDB;
  - Mongoose;
  - Docker;
  - Jest;
  - Swagger;
  - Eslint;
  - Prettier;
  - Github Actions;
  - Vscode;

---

## Apresentação do Projeto

O prejeto é uma API backend que foi desenvolvida com o objetivo de gerenciar reservas, utilizando MongoDB como banco de dados. Sua funcionalidade principal é fornecer um conjunto de datas bloqueadas, conforme especificado em um intervalo de tempo definido pelo usuário.

:warning: **É necessário ter o docker-compose instalado.**

## Inciando o projeto

Para iniciar o projeto, basta baixar ou clonar este repositório.

Acesse a raiz do projeto, abra o terminal, em seguida digite:

    npm run docker

**OU**

    docker-compose -f docker-compose.yml up -d

<br>

**Com o docker-compose ativo, a API estará acessível em http://localhost:3000/** 

**E a documentação da API no Swagger estará disponível em http://localhost:3000/api**

:warning: **Optei por não utilizar o arquivo .env apenas para simplificar a visualização do desafio, porém, utilizo em uma aplicação real.**

### Testes

    npm run test

### Endpoint

A API contém somente um endpoint, o qual está detalhado no Swagger. No mesmo terá retorno e a possibilidade de teste.

**Link para o Swagger: http://localhost:3000/api**
