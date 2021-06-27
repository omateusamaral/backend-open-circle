
# Backend OpenCircle

Backend da aplicação para gerenciar usuários.


## Principais tecnologias


**Server:**  
- NodeJS 
- Express
- TypeScript
- Yup
- PostgreSQL
- TypeORM

  
## Quer rodar localmente?

Faz um clone do projeto

```bash
  git clone git@github.com:omateusamaral/backend-open-circle.git
```

Abre o projeto no seu terminal e rode o  seguinte comando para instalar as dependências

```bash
  yarn
```
ou

```bash
  npm install
```
Antes de iniciar o servidor você precisa criar um .env na pasta raiz do projeto.

criado, você deve criar uma variavel **DATABASE_URL** vejo o exemplo:


```bash
DATABASE_URL = postgres://postgres:password@localhost:5432/opencircle
```

agora algumas explicações:

- O backend está utlizando postgreSQL como banco de dados,

 então é necessário telo na sua máquina caso não tenha baixe
 
  ele por aqui e configure ele de acordo com seu SO [@postgreSQL](https://www.postgresql.org/download/)

- tendo instalado e configurado seu usário e senha do postgreSQL 
agora crie um banco de dados com nome de sua preferência.
 No caso do projeto utilizei o nome **opencircle**

Agora vamos explicar essa que o  **DATABASE_URL** está recebendo

No seu ormconfig.js existe um campo no objeto recebendo a sua URL atráves do .env

sem essa URL você não consiguera se conectar com sua base de dados.


```bash
DATABASE_URL = postgres://<NOME DE USUARIO DO SEU BD>:<SUA SENHA>@<SEU HOST>:<SUA PORTA POR PADRÃO VEM: 5432>/<NOME DA BASEU DE DADOS QUE VOCÊ CRIOU>
```
- passe os campos correntetamente para se conectar com seu BD

🤚🤚 Calma quase lá

abra sua terminal e rode o seguinte para criar os campos no seu banco de dados:

```bash
  yarn typeorm migration:run
```

ou

```bash
npx run typeorm migration:run
```

## ligando o servidor
feito essa parte de configuração hora de rodar o servidor, 

por padrão ele está rodando na porta do 3333.
Porém você pode mudar isso no arquivo **server.ts**


Certo agora no seu terminal rode o comando: 

```bash
  yarn dev
```
   ou

```bash
  npm run dev
```

se aparecer as mensagens de log  **Running at 3333 (ou na porta que você colocou)** e a mensagem **connected with db** 

quer dizer que rodou tudo certo e você pode continuar




  
## Refêrencia para API

a base_url do projeto é **http://localhost:<A porta que você colocou>**


#### Criar um usuário

```http
  POST /users/create
```


| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `document` | `string` | **Requerido passar no body da requisição**.  |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `contract` | `string` | **Requerido passar no body da requisição**.  |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `occupation` | `string` | **Requerido passar no body da requisição**.|

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `email` | `string` | **Requerido passar no body da requisição**.     |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `telefone1` | `string` | **Requerido passar no body da requisição**. |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `telefone2` | `string`| **NÃO Requerido**.                           |

#### Pegar usuários

```http
  GET /users/
```


#### Pegar dados do usuário
```http
  GET /users/get/user/:id
```
| params | Type     | Description                                     |
| :-------- | :------- | :-------------------------                   |
| `id` | `string` | **Requerido passar no params da requisição**.     |


#### editar um usuário

```http
  PUT /users/update/user/:id
```


| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `document` | `string` | **Requerido passar no body da requisição**.  |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `contract` | `string` | **Requerido passar no body da requisição**.  |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `occupation` | `string` | **Requerido passar no body da requisição**.|

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `email` | `string` | **Requerido passar no body da requisição**.     |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `telefone1` | `string` | **Requerido passar no body da requisição**. |

| body | Type     | Description                                        |
| :-------- | :------- | :-------------------------                    |
| `telefone2` | `string`| **NÃO Requerido**.                           |

#### Deletar usuário
```http
  DELETE /users/delete/:id
```
| params | Type     | Description                                     |
| :-------- | :------- | :-------------------------                   |
| `id` | `string` | **Requerido passar no params da requisição**.     |



  
## Screenshots

![Captura de tela de 2021-06-27 18-23-37](https://user-images.githubusercontent.com/37390930/123559842-ea2e1980-d774-11eb-9099-343b7db8fe93.png)

![Captura de tela de 2021-06-27 18-24-03](https://user-images.githubusercontent.com/37390930/123559843-ed290a00-d774-11eb-91a3-14908832709f.png)

![Captura de tela de 2021-06-27 18-24-22](https://user-images.githubusercontent.com/37390930/123559845-ef8b6400-d774-11eb-91a6-2af0ba7c524e.png)

  
## Desafios e aprendizagens

O principal desafio foi configurar a questão entre nodejs com typescript, typeORM e o postgreSQL

graças aos tutorias no youtube seja em português ou inglês me ajudaram, sites como StackOverFlow, notion e entre outros

ajudaram também.

Depois de ter configurado tudo foi bem mais tranquilo, também teve desafios porém usei alguns repositórios/vídeo como apoio

para criar. um dos repositório é de um recente meu "otravessao-api".

## deploy 

sobre o deploy da aplicação aplicação foi outro grande desafio pois nunca tinha feito deploy com essas tecnlogias (typescript,postgreSQL e typeORM)

mas graças a esse [vídeo](https://www.youtube.com/watch?v=DVTceFeaAdc&list=WL&index=13&t=1874s&ab_channel=AngeloLuz) consegui!! então fica aqui meus agradecimentos 😎🤝😎

ficou como aprendizagem esse deploy e as configurações.



  
## Autor

- [@mateusamaral](https://www.linkedin.com/in/mateus-passos-amaral/)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  