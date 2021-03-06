# API Rest

## Descrição do projeto:
Desenvolvimento de uma Interface de Programação de Aplicaçoes (API), seguindo padrão Rest, e como padrão de arquitetura o MVC. <br>
A aplicação tem como **__entidade__** a tabela **clientes**, e seus atributos são: 
- Id
- Nome
- Email
- Telefone
<br>
<hr>

## Ferramentas utilizadas:
- Linguagem de programação: JavaScript
- Ambiente de Execução: Node.js
- Framework: Express
- Banco de dados: SQLite

<br>
<hr>

## Dependências necessárias:
```json
"dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "nodemon": "^2.0.16",
    "path": "^0.12.7",
    "url": "^0.11.0",
  }
```

## Dependências de desenvolvimento:
```json
"devDependencies": {
    "sqlite3": "^5.0.8"
  }
```

<a href = 'https://github.com/DiegoTolotto/API_Rest/blob/5b35969bc2258f1de7baf6c552e8219c7464fb7c/package.json'>Clique aqui</a> e seja direcionado ao package.json.

<br>
<hr>

## Para começar
Tenha instalado no computador o Node.js, não é possivel testar sem ele.<br>

Intale as dependencias necessarias, digitando o comando a baixo no terminal:
```js
npm install 
```

Rode o código:
```js
node ./src/infra/criaDB.js
```
OBS: É importante que o código acima seja executado antes de levantar o servidor, ele criara o banco de dados, do contrário não será possivel realizar nenhum dos comandos do CRUD.<br>
<br>
<hr>


## Inicialização da aplicação:
Digite no terminal:
```js
npm start
```
**A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.**

<br>
<hr>

## CRUD:
Para realizar o teste com o CRUD você deve utilizar uma ferramenta como o insominia ou postman. Link: http://localhost:3000/users<br>
OBS: Os atributos estão declarados das seguite forma:


- id <font color="gree">INTEGER PRIMARY KEY AUTOINCREMENT</font>,
- nome <font color="gree">VARCHAR</font>,
- email <font color="gree">VARCHAR</font>,
- telefone <font color="gree">VARCHAR</font>



### **POST:**  
Para começarmos devemos inserir um registro, vamos usamos o metodo POST.<br>
Os atributos da tabela "clientes" que devem ser preenchidos são:
- Nome 
- Email
- Telefone

O id será preenchido automaticamente.

POST: http://localhost:3000/users
<br>


### **GET:** 
<a href = 'http://localhost:3000/users'>Clique aqui</a> para visualizar o resultado da api (não se esqueça de inicializar o servidor com o **__npm start__**).<br>
Depois que os post foi feito é possivel visualizar os dados com o GET.<br>
Podemos ter acesso a todos os usuarios cadastrados utilizando a rota **__/users__**, ou ter acesso a apenas um usuario cadastrado, basta apenas inserir o ID desejado depois da rota, assim **__/users/id__**. Por exemplo, se desejar buscar pelo id 5, faça assim **__/users/5__**<br>


GET por id: http://localhost:3000/users/id<br>
GET: http://localhost:3000/users
<br>

### **PUT:** 
Se deseja ajustar ou atualizar algum cadastro utlize o PUT.<br>
Este método utliza do **id** para realizar a mudança no cadastro, por exemplo, se o nosso objetico for mudar o id 40, para isso vamos utlizar o PUT na rota **__/users/40__**. 
<br>

PUT: http://localhost:3000/users/id


### **DELETE:** 
Caso queira excluir algum cadastro utlize o DELETE.<br>
Assim como o PUT este método utliza o **id**, por exemplo, se desejar excluir o usuario de id 10, use o DELETE na rota  **__/users/10__**.<br>
DELETE: http://localhost:3000/users/id

