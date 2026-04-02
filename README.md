# Projeto Garagem V2
## Desenvolvido por Bismarck e Fábio

Aplicativo completo de cadastro, listagem, atualização e exclusão de itens da coleção de Hot Wheels.

## Visão geral

- Aplicação frontend em React.
- Backend em Node.js + Express, com persistência simples em arquivo JSON (`backend/data/users.json`).
- CORS configurado para permitir requisições do frontend (`http://localhost:3001`).
- Fluxo CRUD de veículos (carros) com rotas REST:
  - Listar todos
  - Listar por ID
  - Cadastrar
  - Atualizar
  - Deletar

## Estrutura do projeto

- `/backend`
  - `Server.js` - servidor Express principal.
  - `/routes/users.routes.js` - rotas CRUD de carro.
  - `/utils/filehandler.js` - leitura e escrita em `data/users.json`.
  - `/data/users.json` - dados persistidos da coleção (inicialmente vazio ou com objetos).

- `/frontend`
  - `src/App.js` - definição de rotas com `react-router-dom`.
  - `/pages`:
    - `main` - página inicial.
    - `cadastrar` - formulário de criação.
    - `geral` - listagem.
    - `atualizar` - busca e edição por ID.
    - `deletar` - busca e exclusão por ID.
  - Cada página tem um arquivo `handle*.js` para chamadas `axios`.

## Tecnologias usadas

- Backend:
  - Node.js
  - Express
  - Cors

- Frontend:
  - React
  - React Router DOM
  - Axios
  - Testing Library (dependências automáticas de CRA)

## Pré-requisitos

- Node.js 18+ e npm 10+ (versões compatíveis)

## Instalação

1. Abra o terminal na pasta do projeto:
   - `c:\Users\bisma\OneDrive\Área de Trabalho\Projeto_garagemV2-main`

2. Instale dependências root (somente para gerenciar `tailwindcss` global, se usado):
   - `npm install`

3. Instale dependências do backend:
   - `cd backend`
   - `npm install`

4. Instale dependências do frontend:
   - `cd ../frontend`
   - `npm install`

## Como rodar o projeto

### Backend

1. Na pasta `backend`:
   - `node Server.js`
2. O servidor ficará em `http://localhost:3000`.

### Frontend

1. Na pasta `frontend`:
   - `npm start`
2. Abra `http://localhost:3001`.

> Observação: o backend está configurado com CORS para aceitar `http://localhost:3001`.

## API REST (backend)

Base URL: `http://localhost:3000/carros`

- `GET /listar_carro`
  - Retorna lista completa de carros.

- `GET /listar_carro/:id`
  - Retorna dados do carro com ID especificado.

- `POST /cadastrar_carros`
  - Cadastra novo carro.
  - Body JSON:
    - `categoria`, `marca_car`, `modelo_car`, `ano_modelo`, `cor`

- `PUT /atualizar_carro/:id`
  - Atualiza carro por ID. Envia apenas campos a atualizar (ou todos).
  - Body JSON opcional: `categoria`, `marca_car`, `modelo_car`, `ano_modelo`, `cor`

- `DELETE /deletar_carros/:id`
  - Exclui carro por ID.

### Exemplos com curl

- Listar:
  - `curl http://localhost:3000/carros/listar_carro`

- Cadastrar:
```bash
curl -X POST http://localhost:3000/carros/cadastrar_carros \
  -H "Content-Type: application/json" \
  -d '{"categoria":"HW Screen Time","marca_car":"Ford","modelo_car":"67 Mustang","ano_modelo":2024,"cor":"Azul"}'
```

- Atualizar:
```bash
curl -X PUT http://localhost:3000/carros/atualizar_carro/1 \
  -H "Content-Type: application/json" \
  -d '{"cor":"Vermelho"}'
```

- Deletar:
```bash
curl -X DELETE http://localhost:3000/carros/deletar_carros/1
```

## Testes

- Frontend: `cd frontend && npm test`
- Backend: sem testes automatizados definidos neste momento.

## Observações

- O armazenamento em arquivo (`users.json`) é simples e não preparado para altas cargas.
- Em produção, considere banco de dados (SQLite, PostgreSQL, MongoDB).
- A API publica a coleção sem autenticação.

## Deploy local rápido

1. Suba backend e frontend em terminais separados.
2. Acesse UI em `http://localhost:3001`.
3. Use navegação para cadastrar, listar, atualizar e deletar.

## To Do / Melhorias

- Adicionar validações de formulários mais robustas.
- Tratar erros de conexão no frontend com mensagens ao usuário.
- Implementar autenticação e autorização.
- Adicionar testes automáticos para rotas backend e componentes React.
