<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=Concluded&color=blue&style=flat"/>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Rafa-KozAnd/Ignite_Node.js_Challenge_09">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/Rafa-KozAnd/Ignite_Node.js_Challenge_09">
  <img alt="GitHub repo file count" src="https://img.shields.io/github/directory-file-count/Rafa-KozAnd/Ignite_Node.js_Challenge_09">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Rafa-KozAnd/Ignite_Node.js_Challenge_09">
  <img alt="GitHub language count" src="https://img.shields.io/github/license/Rafa-KozAnd/Ignite_Node.js_Challenge_09">
</p>

# Ignite_Node.js_Challenge_09

Node JS challenge done with 'Rocketseat' Ignite course. ("Desafio 09 - Construindo com serverless")

## 💻 Sobre o desafio

Nesse desafio você irá recriar uma parte da API de *todos* que foi desenvolvida no desafio [Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8) mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
As rotas que deverão existir são:

**POST -** `/todos/{userid}`

**GET-** `/todos/{userid}`

### Sobre as rotas

- **POST -** `/todos/{userid}`
    
    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.
    
    O *todo* deverá ser salvo com os seguintes campos no DynamoDB:
    
    { 
      id: 'uuid', // id gerado para garantir um único todo com o mesmo id
      user_id: 'uuid' // id do usuário recebido no pathParameters
      title: 'Nome da tarefa',
      done: false, // inicie sempre como false
      deadline: new Date(deadline)
    }
    
    - **GET-** `/todos/{userid}`
    
    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).
    
    A rota deve retornar os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.
