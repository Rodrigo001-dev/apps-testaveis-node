## :page_with_curl: Projeto

Criando uma API testável com Node!

Quando alguém começa a programar principalmente com Backend, uma das principais precupações dessa pessoa ao criar projetos, principalmente projetos que vão crescer muito é a arquitetura do projeto.

<LINKEDIN>
E essa não deveria ser a primeira precupação que você deveria estar tendo nessa situação, porque em minha visão umas das coisas mais importantes para definir a arquitetura de um projeto principalmente no backend, é se a aplicação é fácil de testar.
</LINKEDIN>

Pra mim uma aplicação que é fácil de testar, que é fácil de escrever novos testes automatizados, pricipalmente testes que estão na base da pirâmide como são os testes unitários, pra mim é isso que determina que uma aplicação está seguindo bons padrões de projeto, uma boa arquitetura, e é isso que vai te guiar no desenvolvimento da sua próxima aplicação backend.

<LINKEDIN>
E por isso nesse post, vou falar sobre construção de APIs em Node testáveis, começando pela camada mais importante da sua aplicação, que é a camada de domínio.
</LINKEDIN>

Na camada de domínio é a camada de como você pensa na sua aplicação desacoplada de qualquer framework, de qualquer biblioteca, qualquer cenário de infraestrutura, você pensa somente na regra de negócio e aplica testes em cima disso e depois esse código que você produz pode se conectar a qualquer framework, ou seja, um Nest, um Adonis, até um express ou até qualquer banco de dados, todas essas ferramentas não importam porque nessa aplicação eu exercitei a minha capacidade de pensar em construção de software desacoplada de qualquer coisa que se conecta com a nossa aplicação.

<LINKEDIN>
Quando pensamos em aplicações testáveis, independente da linguagem utilizada, temos que pensar principalmente no desacoplamento.

Mas o que é desacoplamento?

Desacoplamento nada mais é do que pensar no nosso código desacoplado, ou seja, um código independente, independente do que for utilizado no final das contas, temos que conseguir pensar na nossa aplicação de uma maneira que ela esteja isolada, que as nossas regras de negócio estejam isoladas "do mundo a fora" e é por isso que nessa aplicação eu: criei uma aplicação, testei essa aplicação sem em nenhum momento rodar qualquer servidor HTTP, sem em nenhum momento bater em qualquer banco de dados.
</LINKEDIN>

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nodejs.org/en/" target="_blank"> <img src="https://img.shields.io/badge/-Node.js-32CD32?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js"> </a>
<a href="https://vitest.dev/" target="_blank"> <img src="https://img.shields.io/badge/-Vitest-86B91A?style=flat-square&logo=vite&logoColor=white" alt="Vitest"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
