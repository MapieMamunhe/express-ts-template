# Script para apresentação no evento MozDevz

## Teoria

### O que é Backend
Uma aplicação é composta de frontend, que é a parte visual muito importante que funciona como a infraestrutura, a base para interação com o utilizador. O frontend recebe todo o crédito, pois, por mais inovadora que seja a ideia do sistema, se a aplicação não estiver bem apresentada ("maquiada"), ninguém a utilizará [cite: 4].

Backend é onde a lógica do negócio reside, sendo o sistema a funcionar [cite: 7]. Isso inclui os detalhes do que acontece quando o utilizador realiza ações como cadastrar, fazer login, inscrever-se ou efetuar pagamentos [cite: 8].

Um "Backend Developer" especializa-se em construir e manter os sistemas do lado do servidor que alimentam aplicações web e móveis. Enquanto os utilizadores interagem com o frontend, os sistemas backend gerem o processamento de dados, a lógica de negócio, a autenticação, as integrações e a infraestrutura nos bastidores [cite: 9, 10].

### Lógica de funcionamento de uma API
Uma API (Application Programming Interface) é um conjunto de regras que permite que aplicações de software comuniquem entre si [cite: 14, 15]. Ela é, essencialmente, um programa que necessita de uma interface para facilitar a interação do cliente com os dados [cite: 12]. O desenvolvimento backend implica a preparação dessa interface de programação, facilitando a consulta, retenção, atualização e outras manipulações de dados pelos clientes [cite: 13].

#### Verbos de Requisição (Analogia do Restaurante)
* **GET**: Chamamos o garçom para trazer o cardápio disponível, segundo os nossos gostos [cite: 19].
* **POST**: Pedimos ao garçom um prato personalizado para adicionar ao cardápio [cite: 20].
* **PUT**: Pedimos ao garçom que faça uma correção ao cardápio [cite: 21].
* **DELETE**: Pedimos ao garçom que remova algum item do cardápio [cite: 22].

### Comunicação com base de dados
Informações são dados processados, e as bases de dados armazenam os dados que serão processados no sistema [cite: 29]. A comunicação com a base de dados no backend é feita por meio de um conector, que geralmente requer:
* Host [cite: 32]
* Porta [cite: 33]
* Nome da base de dados [cite: 34]
* Dados de autenticação (user e pass, entre outras formas) [cite: 35]

## Prática

### Construindo a Base de dados
Para simplificar, criaremos um MVP (Produto Mínimo Viável), que é a base a partir da qual se pode estender para funcionalidades reais e funcionais [cite: 38, 39]. Trabalharemos com as seguintes 4 entidades:
1.  Participante
2.  User
3.  Evento
4.  Bilhete

### Preparando o Ambiente
Em projetos reais, raramente se começa do zero; o código é reaproveitado [cite: 44].
1.  **Clone o template**: `git clone https://github.com/MapieMamunhe/express-ts-template` [cite: 46]
2.  **Instale as dependências**: `npm install` [cite: 47]
3.  **Configure o package.json**: Procure a linha "start" e adicione `src/app.ts` logo após `..serve` [cite: 48].
4.  **Inicie o projeto**: Corra o script `npm start` no terminal [cite: 49].
5.  **Teste a API**: Utilize um testador de API (como Postman ou Bruno) e envie um request GET para a porta 3000 [cite: 50].
