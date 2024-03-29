# GitHub Repository WikiRepo

Este é um projeto de aplicação React que permite inserir o usuário/repositório do GitHub para criar uma lista de repositórios. Ele oferece funcionalidades para adicionar diversos repositórios de diferentes usuários, mostrando informações como descrição do repositório, botão para acessar a página web (se disponível), link para o repositório e botão para remover o repositório da lista.

## Funcionalidades

- Adicionar Repositório: Permite adicionar repositórios informando o usuário/repositório do GitHub. (DESAFIO DIO)
- Remover Repositório: Permite remover um repositório da lista. (DESAFIO DIO)
- Acesso ao Repositório: Botão para acessar o repositório no GitHub.
- Acesso à Página Web: Botão para acessar a página web do repositório (se disponível).

## Como Usar

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/Vitor-Guerra/trilha-react-desafio-2.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install react-scripts
    npm install axios
    npm install styled-components
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

5. Acesse a aplicação em seu navegador:
    [http://localhost:3000](http://localhost:3000)

## Tecnologias Utilizadas

- React: Utilizado para criar a interface de usuário dinâmica e responsiva.
- JavaScript: Linguagem de programação principal para a lógica do aplicativo.
- HTML e CSS: Utilizados para estruturação e estilização da interface.
- Styled-components: Utilizado para estilizar os componentes de forma mais dinâmica e eficiente.
- Axios: Biblioteca independente para fazer requisições HTTP em navegadores.

## Estrutura do Projeto

- **src/**: Contém os arquivos-fonte do aplicativo.
  - **components/**: Componentes React reutilizáveis.
  - **assets/**: Ícones e imagens.
  - **App.js**: Componente principal que renderiza a aplicação.
  - **index.js**: Arquivo de entrada do React.
  - **global.js**: Arquivo de indexação do styled component.
  - **styles.js**: Arquivo de estilos globais do React.
  - **services/**: Request da API.
- **public/**: Contém os arquivos estáticos da aplicação.
- **README.md**: Documentação do projeto.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novas funcionalidades. 

---

Este projeto foi inspirado em um desafio lançado pela plataforma DIO. Para acessar a versão original do desafio, visite o [repositório no GitHub](https://github.com/digitalinnovationone/trilha-react-desafio-2).
