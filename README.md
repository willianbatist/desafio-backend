# Desafio Back-end - Housi

Nesse desafio você construirá uma versão simplificada de um sistema de gerenciamento de reservas de apartamentos.
Faça um fork desse repositório e ao final do desafio, abra um pull request e nos envie para que possamos corrigir
## Contexto

Um sistema de gestão de reservas é um sistema que centraliza diversas funções em uma única ferramenta. Com um Central Reservation System, ou CRS – na sigla em inglês – eficiente, você consegue incrementar o seu serviço e otimizar a forma como o trabalho é feito no dia a dia, melhorando o aproveitamento do seu tempo, das tarefas mais básicas às mais exigentes.

Neste cenário nosso CRS deve permitir que seja possível:
1. Adicionar reservas
2. Atualizar reservas
3. Visualizar reservas
4. Remover reservas


## Requisitos

Você deve criar um serviço com os seguintes requisitos:

1. Deve ser possível criar reservas com as seguintes informações:
	* Nome do apartamento
	* Data de check-in
	* Data de check-out
	* Quantidade de hóspedes
	* Nome do(s) hóspede(s)
	* E-mail dos hóspedes 
2. Deve ser possível editar uma reserva
3. Deve ser possível remover uma reserva
4. Deve ser possível listar as reservas já criadas
5. Deve ser possível filtrar as reservas por data de check-in e check-out
6. O serviço deve garantir que não exista conflito de datas entre as reservas


## Restrições

1. O serviço deve ser escrito em Node.js com TypeScript
2. O serviço deve armazenar informações em um banco de dados MongoDB.
3. O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto e os serviços disponibilizados.
4. O projeto deve conter testes automatizados.

## Bônus
1. Todo ambiente estar configurado para o docker, e possa ser executado com apenas algumas linhas de código.
2. Utilizar o Swagger para documentar a API.
3. Adicionar processo de CI no github actions, onde os testes automatizados sejam executados a cada push na PR.
4. Adicionar paginação na listagem.

## Avaliação

1. O desafio deve ser enviado para a pessoa do RH que estiver em contato com você, no formato de `.zip` ou um link para um repositório do Github
2. Iremos te avaliar pela arquitetura do serviço, qualidade do código, entendimento das regras de negócio, capricho com o desafio e o quão preparado esse serviço estaria para ser rodado em produção
3. Depois que corrigirmos o desafio, te chamaremos para conversar com o time, apresentar o desafio e discutir sobre as decisões que você tomou
4. Achamos que **1 semana** é um tempo ok para fazer o desafio, mas sabemos que nem todo mundo tem o mesmo nível de disponibilidade. Portanto, nos avise se precisar de mais tempo, ok?
5. Boa sorte :)
