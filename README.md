# 🌐 Cenário Tech

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![Firebase](https://img.shields.io/badge/Database-Firestore-orange)
![Bootstrap](https://img.shields.io/badge/Style-Bootstrap%205-purple)

Uma plataforma moderna de blog desenvolvida para demonstrar proficiência em tecnologias Full-Stack, focada em notícias e insights sobre o mundo da tecnologia. O projeto utiliza o conceito de **Glassmorphism** em sua interface e **Firebase Firestore** como banco de dados NoSQL.

---

## 📸 Funcionalidades

* **Listagem de Postagens:** Visualização de posts em cards com design moderno e responsivo.
* **Criação de Conteúdo:** Formulário para adicionar novos posts com Título, Autor, Conteúdo e URL de Imagem.
* **Edição e Atualização:** Possibilidade de editar postagens já existentes.
* **Exclusão:** Remoção de postagens indesejadas.
* **Interface Responsiva:** Layout adaptável para dispositivos móveis e desktops, utilizando Bootstrap 5.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Node.js**: Ambiente de execução JavaScript.
* **Express.js**: Framework para criação da API RESTful e gerenciamento de rotas.
* **Firebase Admin SDK**: Para comunicação segura com o Firestore no lado do servidor.

### Frontend
* **HTML5 & CSS3**: Estrutura e estilização (Glassmorphism, Parallax).
* **Bootstrap 5**: Framework CSS para responsividade e componentes.
* **JavaScript (Vanilla)**: Manipulação do DOM e consumo da API via `fetch`.

### Banco de Dados
* **Google Firestore**: Banco de dados NoSQL em tempo real.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado.
* Uma conta no Google Firebase configurada.

### Passo a Passo

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/cenario-tech.git](https://github.com/seu-usuario/cenario-tech.git)
    cd cenario-tech
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Configuração do Firebase (Importante ⚠️)**
    O projeto utiliza o `firebase-admin` para acessar o banco de dados. Você precisa do arquivo de credenciais de serviço (Service Account Key).
    
    1. Acesse o console do Firebase > Configurações do Projeto > Contas de Serviço.
    2. Gere uma nova chave privada (arquivo `.json`).
    3. Renomeie o arquivo ou ajuste o caminho no `index.js` na linha:
       ```javascript
       credential: admin.credential.cert("./caminho-para-sua-chave.json")
       ```
    4. **Nota:** Certifique-se de que o arquivo JSON da chave esteja na raiz do projeto (ou no local apontado pelo código).

4.  **Inicie o Servidor**
    ```bash
    node index.js
    ```

5.  **Acesse a Aplicação**
    Abra o navegador e vá para:
    ```
    http://localhost:3000
    ```

---

## 📡 Documentação da API

O backend expõe os seguintes endpoints REST para gerenciamento das postagens:

| Método | Endpoint | Descrição | Corpo da Requisição (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/posts` | Lista todas as postagens | N/A |
| `GET` | `/api/posts/:id` | Retorna uma postagem específica | N/A |
| `POST` | `/api/posts` | Cria uma nova postagem | `{ "titulo": "...", "autor": "...", "conteudo": "...", "imagemUrl": "..." }` |
| `PUT` | `/api/posts/:id` | Atualiza uma postagem existente | `{ "titulo": "...", "autor": "...", "conteudo": "...", "imagemUrl": "..." }` |
| `DELETE`| `/api/posts/:id` | Remove uma postagem | N/A |

---

## 📂 Estrutura de Pastas

```text
Trabalho-Diogo-Vitor-Lauro/
├── index.js                # Arquivo principal do servidor (Backend)
├── package.json            # Dependências do projeto
├── firebase-config.js      # Configurações adicionais do Firebase (Client-side)
├── front-end/              # Arquivos estáticos (Frontend)
│   ├── assets/
│   │   ├── css/            # Estilos (blog-parallax, postagem, edicao, sobre)
│   │   └── img/            # Logotipos e imagens
│   ├── blog-parallax.html  # Página Inicial
│   ├── postagem.html       # Página de Criação
│   ├── edicao.html         # Página de Edição
│   └── sobre.html          # Página Sobre
└── ... (arquivos de config)

```

---

## 👥 Autores

Desenvolvido como parte do trabalho acadêmico da disciplina ministrada pelo Prof. Diogo.

* **Vitor Daniel** - *Desenvolvedor Full Stack*

---

## 📄 Licença

Este projeto está sob a licença ISC.
