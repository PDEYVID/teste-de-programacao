# Projetos de Teste de Programação

Este repositório contém três projetos de teste de programação desenvolvidos em React.

## Tarefa 1

# Conversor de Números Romanos

Este é um projeto que consiste em um conversor de números romanos para arábicos e vice-versa. O conversor aceita apenas números inteiros positivos entre 1 e 3999, que são os limites do sistema de numeração romana.

## Sobre Números Romanos

Os números romanos são um sistema de numeração utilizado na Roma Antiga e em várias partes do mundo até hoje. Eles são representados por letras maiúsculas, com sete numerações principais: I (1), V (5), X (10), L (50), C (100), D (500) e M (1000).

A representação dos números romanos segue algumas regras:

- Algarismos de menor ou igual valor à direita são somados ao algarismo de maior valor. Por exemplo, XI representa 10 + 1 = 11.
- Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor. Por exemplo, XC representa 100 - 10 = 90.
- Não é permitido repetir um algarismo mais de três vezes seguidas. Para representar números como 4, 40, 400, é necessário usar uma forma especial de escrita. Por exemplo, 4 é representado por IV, 40 por XL e 400 por CD.
- Existem algumas combinações específicas de algarismos. A letra I é utilizada somente antes do V e do X, a letra X é utilizada somente antes do L e do C, e a letra C é utilizada somente antes do D e do M.

## Funcionalidades do Conversor

O conversor de números romanos possui as seguintes funcionalidades:

- Conversão de números romanos para arábicos: Permite inserir um número romano válido e retorna o valor correspondente em arábico.
- Conversão de números arábicos para romanos: Permite inserir um número arábico válido entre 1 e 3999 e retorna a representação romana correspondente.

## Como utilizar o Conversor

Para utilizar o conversor de números romanos, siga os passos abaixo:

1. Insira um número romano válido no campo designado.
2. Clique no botão "Converter para Arábico" para obter a representação arábica correspondente.
3. Ou, se desejar converter um número arábico para romano, insira um número válido no campo designado.
4. Clique no botão "Converter para Romano" para obter a representação romana correspondente.

## Limitações

O conversor de números romanos possui as seguintes limitações:

- Aceita apenas números inteiros positivos entre 1 e 3999.
- Não são aceitos números romanos inválidos ou fora do intervalo especificado.

## Exemplos

Aqui estão alguns exemplos de conversão utilizando o conversor de números romanos:

- Conversão de Romano para Arábico:
  - Entrada: XI
  - Saída: 11

- Conversão de Arábico para Romano:
  - Entrada: 99
  - Saída: XCIX

Lembre-se de que o conversor suporta apenas números dentro dos limites mencionados.

Divirta-se usando o conversor de números romanos!


### Como executar

1. Clone este repositório para o seu computador usando o comando `git clone <URL_DO_REPOSITORIO>`.
2. Navegue até o diretório do projeto Tarefa1.
3. Instale as dependências do projeto usando o comando `npm install`.
4. Inicie a aplicação com o comando `npm start`.
5. Acesse a aplicação em seu navegador no seguinte endereço: `http://localhost:3000`.

## Tarefa 2

# Jogo da Vida de Conway

Neste projeto, você irá implementar um tabuleiro interativo do Jogo da Vida de Conway. O Jogo da Vida é um autômato celular desenvolvido pelo matemático britânico John Horton Conway em 1970. Ele é um dos exemplos mais conhecidos de autômatos celulares e tem aplicações em várias áreas da ciência.

## Regras do Jogo da Vida

O Jogo da Vida é jogado em um tabuleiro bidimensional, composto por células. Cada célula pode estar viva ou morta, e as regras do jogo são aplicadas a cada geração para determinar o estado das células na próxima geração.

As regras são as seguintes:

1. Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
2. Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
3. Qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração.
4. Qualquer espaço vazio com exatamente três vizinhos vivos se torna uma célula viva.

Essas regras simples dão origem a padrões complexos e interessantes à medida que o jogo avança.

## Objetivo do Projeto

Seu objetivo é implementar um tabuleiro interativo do Jogo da Vida de Conway. O tabuleiro deve ter pelo menos 10 células de largura e altura para permitir uma jogabilidade adequada.

## Funcionalidades do Jogo

O tabuleiro do Jogo da Vida deve permitir as seguintes funcionalidades:

- Configurar o estado inicial das células no tabuleiro.
- Avançar para a próxima geração, aplicando as regras do Jogo da Vida.
- Reiniciar o jogo, voltando ao estado inicial.
- Pausar o jogo e continuar a partir do estado atual.

## Como Jogar

1. Inicie o jogo configurando o estado inicial das células no tabuleiro.
2. Avance para a próxima geração para ver como as células evoluem de acordo com as regras do jogo.
3. Se desejar, pause o jogo para observar o estado atual das células ou reinicie o jogo para voltar ao estado inicial.

## Considerações Finais

O Jogo da Vida de Conway é um desafio interessante que demonstra os princípios dos autômatos celulares. Ao implementar este projeto, você terá a oportunidade de explorar conceitos de programação e lógica, além de observar a emergência de padrões complexos a partir de regras simples.

Divirta-se jogando o Jogo da Vida e experimente diferentes configurações iniciais para ver as diferentes evoluções das células!


### Como executar

1. Navegue até o diretório do projeto Tarefa2.
2. Instale as dependências do projeto usando o comando `npm install`.
3. Inicie a aplicação com o comando `npm start`.
4. Acesse a aplicação em seu navegador no seguinte endereço: `http://localhost:3000`.

## Tarefa 3

# Divisor de Conta de Restaurante

Este projeto consiste em criar uma calculadora capaz de dividir a conta de um restaurante entre os clientes, levando em consideração apenas o valor consumido por cada um. A calculadora permite inserir múltiplos produtos e clientes, e realiza a divisão da conta de forma individualizada, aplicando a taxa de serviço de 10% sobre o valor gasto por cada cliente.

## Funcionalidades do Divisor de Conta

O Divisor de Conta de Restaurante oferece as seguintes funcionalidades:

- Inserir produtos consumidos: É possível adicionar produtos consumidos, informando o nome do produto e o seu preço.
- Inserir clientes: É possível adicionar clientes, informando o nome do cliente e o valor que ele consumiu.
- Remover produtos e clientes: É possível remover produtos e clientes individualmente.
- Calcular divisão da conta: Ao clicar no botão "Calcular", o sistema realiza o cálculo da divisão da conta, levando em consideração os produtos consumidos por cada cliente e aplicando a taxa de serviço de 10%.


### Como executar

1. Navegue até o diretório do projeto Tarefa3.
2. Instale as dependências do projeto usando o comando `npm install`.
3. Inicie a aplicação com o comando `npm start`.
4. Acesse a aplicação em seu navegador no seguinte endereço: `http://localhost:3000`.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS

## Autor

Paulo Deyvid



