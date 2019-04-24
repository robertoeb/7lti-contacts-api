# Contacts API

API made with Node.js and Adonisjs for a presentation to the group "Profissionais de TI Sete Lagoas"

## Table of Contents

- [Contacts API](#contacts-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [API Documentation](#api-documentation)
    - [List Contacts](#list-contacts)
        - [Request](#request)
        - [Response](#response)
    - [Add Contact](#add-contact)
        - [Request](#request-1)
        - [Response](#response-1)
        - [Errors](#errors)
    - [Update Contact](#update-contact)
        - [Request](#request-2)
        - [Response](#response-2)
        - [Errors](#errors-1)
    - [Delete Contact](#delete-contact)
        - [Request](#request-3)
        - [Response](#response-3)
        - [Errors](#errors-2)
  - [Credits](#credits)

## Installation

**Dependention note**: Before installation make sure to have sqlite3 (3.22), Node (10.15) and AdonisJS (4.1) installed and up. 

1. Clone the project.

    ~~~ sh
    $ git clone https://github.com/robertoeb/7lti-contacts-api
    ~~~

2. Install dependencies.

	~~~ sh
	$ npm install
	~~~
    
4. Set the **.env** file as the example in the project and generate the APP_KEY.
	~~~ sh
	$ adonis key:generate
	~~~
    
4. Create and migrate the database.

    ~~~ sh
    $ adonis migration:run
    ~~~
    
5. Start the aplication

	~~~ sh
	$ npm start
	~~~

## API Documentation

### List Contacts

##### Request 

```sh
GET  /contatos`
```

##### Response

```sh
status: 200 Ok
```

```sh
Content-Type: "application/json"
```

```sh
{
  "contatos": [
    {
      "id": 1,
      "created_at": "2019-04-24 14:07:07",
      "updated_at": "2019-04-24 14:07:07",
      "nome": "João Almeida",
      "email": "joaoalmeida@mailteste.com",
      "telefone": "031999990000"
    },
    {
      "id": 2,
      "created_at": "2019-04-24 14:14:39",
      "updated_at": "2019-04-24 14:14:39",
      "nome": "Kylo Ren",
      "email": "kyloren@mailteste.com",
      "telefone": "0319666990000"
    }
  ]
}
```

### Add Contact

##### Request 

```sh
POST  /contatos`
```

```sh
Parameters:
{
	"nome": "Kylo Ren",
	"email": "kyloren@mailteste.com",
	"telefone": "0319666990000"
}
```

##### Response

```sh
status: 201 created
```

```sh
Content-Type: "application/json"
```

```sh
{
  "message": "Contato salvo com sucesso!",
  "data": {
    "nome": "Kylo Ren",
    "email": "kyloren@mailteste.com",
    "telefone": "0319666990000",
    "created_at": "2019-04-24 14:14:39",
    "updated_at": "2019-04-24 14:14:39",
    "id": 2
  }
}
```

##### Errors
| Status | Error    | Message                                        |
| ------ | -------- | ---------------------------------------------- |
| 409    | Conflict | Já existe um contato cadastrado com esse email |

### Update Contact

##### Request 

```sh
PATCH/PUT /contatos/:id
```

```sh
Parameters:
{
	"telefone": "0319666995555"
}
```

##### Response

```sh
status: 200 Ok
```

```sh
Content-Type: "application/json"
```

```sh
{
  "message": "Contato atualizado com sucesso.",
  "data": {
    "id": 2,
    "created_at": "2019-04-24 14:14:39",
    "updated_at": "2019-04-24 14:33:31",
    "telefone": "031966699555"
  }
}
```

##### Errors
| Status | Error     | Message                                         |
| ------ | --------- | ----------------------------------------------- |
| 409    | Conflict  | Já existe um contato cadastrado com esse email. |
| 404    | Not Found | Contato não encontrado.                         |

### Delete Contact

##### Request 

```sh
PATCH/PUT /contatos/:id
```

##### Response

```sh
status: 200 Ok
```

```sh
Content-Type: "application/json"
```

```sh
{
  "message": "Contato deletado com sucesso.",
  "id": "2"
}
```

##### Errors
| Status | Error     | Message                 |
| ------ | --------- | ----------------------- |
| 404    | Not Found | Contato não encontrado. |

## Credits

- [Roberto E. B. Junior](https://www.linkedin.com/in/robertoeb/)
