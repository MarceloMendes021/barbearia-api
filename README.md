# Barbearia API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/barbershop-api)

## Descrição

Este projeto é uma API RESTful para um sistema de agendamento de barbearia. A API permite o registro e autenticação de usuários, garantindo segurança e validação de dados.

## Linguagem Utilizada

- **JavaScript**: Usado para o desenvolvimento da API e configuração do servidor.

## Estrutura do Projeto

- **server.js**: Inicializa o servidor e configura as rotas principais.
- **db.js**: Gerencia a conexão com o banco de dados MongoDB.
- **authController.js**: Controlador responsável pela autenticação de usuários.
- **userController.js**: Controlador para registro de usuários.
- **User.js**: Modelo de dados do MongoDB para usuários.
- **cpfValidator.js**: Função utilitária para validação de CPF.
- **passwordHandler.js**: Lida com hash e verificação de senhas.
- **errorResponse.js**: Função utilitária para tratamento de erros padronizados.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- dotenv

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/MarceloMendes021/barbershop-api
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd barbershop-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

   ```env
   PORT=3000
   MONGO_URI=sua_string_de_conexao_mongodb
   ```

2. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor estará disponível em: `http://localhost:3000`.

## Rotas e Exemplos

### 1. Registro de Usuário

- **Endpoint**: `POST /api/users/register`
- **Body**:
  ```json
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "11987654321",
    "cpf": "12345678909",
    "password": "senha123"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Usuário registrado com sucesso!"
  }
  ```

---

### 2. Login

- **Endpoint**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "cpf": "12345678909",
    "password": "senha123"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Login realizado com sucesso!",
    "userId": "65fabc123e456a789b12cde3"
  }
  ```

## Melhorias Futuras

- **Integração com um front-end** para gerenciamento de agendamentos.
- **Implementação de um sistema de agendamentos**, permitindo que os clientes reservem horários.
- **Autenticação com JWT**, garantindo mais segurança nas requisições.
- **Recuperação de senha** via e-mail.
- **Função de administrador** para gestão de usuários e horários.

## Testes

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou via terminal com cURL:

### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"cpf": "12345678909", "password": "senha123"}'
```

## Contribuição

Contribuições são bem-vindas! Para sugerir melhorias, abra uma _issue_, envie um _pull request_ ou entre em contato pelo [LinkedIn](https://www.linkedin.com/in/marcelo021/).

---

Feito por Marcelo. 🚀
