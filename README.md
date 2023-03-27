# Fake-Blog - Desafio Técnico Alkabot

Este é um projeto front-end desenvolvido para o desafio técnico da empresa Alkabot. O projeto consiste em um blog fictício que utiliza a API JSONPlaceholder para exibir postagens, comentários e informações de usuários. As principais tecnologias utilizadas neste projeto são React, Axios, React-Bootstrap e outras bibliotecas complementares.

## Tecnologias e bibliotecas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Axios: Biblioteca para realizar requisições HTTP.
- React-Bootstrap: Biblioteca que oferece componentes e estilos do Bootstrap para o React.
- React-Router-DOM: Biblioteca para gerenciar rotas em aplicações React.
- React-Icons: Biblioteca com uma coleção de ícones para serem usados em projetos React.
- React-Infinite-Scroll-Component: Componente para implementação de rolagem infinita em projetos React.
- React-Query: Biblioteca para gerenciar e sincronizar dados do servidor no React.
- PropTypes: Verificação de tipos em tempo de execução para propriedades e objetos React.
- React-Avatar: Biblioteca para gerar avatares de usuário.

## Pré-requisitos

- Node.js: Verifique se você possui o Node.js (versão 14 ou superior) instalado em sua máquina.
- Docker (opcional): Caso queira executar o projeto usando Docker, certifique-se de que o Docker esteja instalado.

## Instruções para execução

### Clonando o repositório

Clone o repositório para sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/xmatheuspereira/fake-blog-challenge
```

### Acesse o diretório clonado:

```bash
cd fake-blog
```

### Executando localmente

Instale as dependências do projeto:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O projeto será iniciado em http://localhost:3000.

### Executando com Docker

Crie a imagem Docker a partir do arquivo Dockerfile:

```bash
docker build -t fake-blog .
```

Execute o contêiner Docker:

```bash
docker run -p 3000:3000 fake-blog
```

O projeto estará disponível em http://localhost:3000.

## Acesso ao site online

O projeto Fake-Blog foi implantado e está disponível online. Você pode acessar o site diretamente pelo link abaixo:

[Visite o Fake-Blog](https://fake-blog-challenge.netlify.app/)
