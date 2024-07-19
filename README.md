## Objetivo:

Criar um conjunto de testes automatizados para o site Sauce Demo, uma aplicação web de demonstração para testes de automação.

<div align="center">
<img width="700px" alt="Site para testes automatizados Saucedemo" src="https://i.imgur.com/waPfLSy.png" />
</div>
<br>

## Sobre o projeto:

#### ➨ Tecnologias utilizadas
- Cypress
- Allure Report

#### ➨ Como executar o projeto

```
git clone git@github.com:sbstleal/sauce-demo-test-vox.git
cd sauce-demo-test-vox
npm run cy:open
```

## Documentações:

<details>
<summary>Plano de teste</summary>
   
#### Introdução:

Este documento descreve o plano de teste para o site Sauce demo

#### Estratégia de Teste:

1. Escopo de teste:
   - Testes manuais
   - Testes automatizados
2. Ferramentas de teste:
   - Testes manuais:
     - Chrome
   - Testes automatizados:
     - Linguagem de programação: Javascript
     - Manutenção de dependências:  NPM
     - Frameworks: Cypress, Allure Reports

#### Cenários de teste:

- Login
- Menu
- Filtrar
- Adicionar item ao carrinho
- Checkout

#### Métricas de qualidade:

- A maioria das funcionalidades do site deve estar funcionando;
- Tempo médio de correção dos bugs de até 2 dias;

#### Classificação dos bugs:

- Crítico: Bugs que causam a falha completa do sistema ou de uma funcionalidade essencial, impossibilitando o uso do software.
- Grave: Bugs que afetam significativamente a funcionalidade principal do sistema, mas existe uma solução alternativa.
- Moderado: Bugs que causam problemas moderados ou afetam funcionalidades secundárias.
- Leve: Bugs que têm pouco ou nenhum impacto na funcionalidade, geralmente de natureza cosmética.

#### Recursos necessários:

- Site Sauce demo: https://www.saucedemo.com/
</details>

<details>
<summary>Cenários de teste</summary>

#### Login

- [x] CT01 - Validar se ao inserir dados validos o login será bem-sucedido.

```
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'login'
Então deve redirecionar para a página de produtos.
```

- [x] CT02 - Validar se ao inserir dados inválidos no login aparecerá uma mensagem de falha.

```
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'login'
Então deve aparecer a mensagem
"Epic sadface: Username and password do not match any user in this service".
```

- [x] CT03 - Validar se ao clicar em login com os campos vazios terá um erro.

```
Dado que o usuário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'login'
Então deve aparecer a mensagem 'Epic sadface: <campo> is required'.

Exemplo:
| campo    |
| username |
| password |

```

<br>

Menu

- [x] CT01 - Validar se ao clicar em All Items irá para a tela de produtos.

```
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "All Items"
Então deve ser redirecionado para a página de produtos.
```

- [x] CT02 - Validar se ao clicar em About irá para a tela sauce labs.

```
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "about"
Então deve ser redirecionado para a página "Sauce Labs".
```

- [x] CT03 - Validar se ao clicar em Logout irá para a tela de login.

```
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "Logout"
Então deve ser redirecionado para a página de Login.
```

- [x] CT04 - Validar se ao clicar em reset app state o carrinho esvaziará.

```
Dado que o usuário esteja logado
E tenha itens em seu carrinho
E clique no menu
Quando clicar em "Reset app state"
Então devem ser removidos todos os itens que estavam no carrinho.
```

<br>

Filtrar

- [x] CT01 - Validar se ao filtrar por Filtro de A a Z terá o resultado ordenado.

```
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "A a Z"
Então devem aparecer todos os produtos desse filtro.
```

- [x] CT02 - Validar se ao filtrar o Filtro de Z a A terá o resultado ordenado.

```
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Z a A"
Então devem aparecer todos os produtos desse filtro.
```

- [x] CT03 - Validar se ao filtrar por Menor para Maior terá o resultado ordenado.

```
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Menor para Maior"
Então devem aparecer todos os produtos desse filtro.
```

- [x] CT04 - Validar se ao filtrar por Maior para Menor terá o resultado ordenado.

```
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Maior para menor"
Então devem aparecer todos os produtos desse filtro.
```

<br>

Adicionar item ao carrinho

- [x] CT01 - Validar se ao clicar em add to card o produto consta no carrinho.

```
Dado que o usuário esteja na página de produtos
Quando clicar em "add to card"
Então deve aparecer o número '1' no icone do carrinho.
```

- [x] CT02 - Validar se ao clicar em remove o produto sairá do carrinho.

```
Dado que o usuário esteja na página de produtos
E queira remover um item do carrinho
Quando clicar em "remove"
Então deve diminuir um número no ícone de carrinho.
```

- [x] CT03 - Validar se ao clicar em remove o produto sairá da listagem.

```
Dado que o usuário esteja na página "Your cart"
E queira remover um item
Quando clicar em "remove"
Então deve ser removido o item.
```

<br>

Checkout

- [x] CT01 - Validar continuidade do checkout ao preencher os dados corretos.

```
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
Quando clicar em "continue"
Então deve prosseguir para a página de Checkout: Overview.
```

- [x] CT02 - Validar se ao não inserir dados obrigatórios no checkout aparecerá a mensagem de erro.

```
Dado que o usuário queira comprar um produto
E não preencha o <campo>
Quando clicar em "continue"
Então não deve aparecer a mensagem 'Error: <campo> is required"

Exemplo:
|First name  |
|Last name   |
|Postal Code |

```

- [x] CT03 - Validar sucesso ao finalizar o checkout.

```
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
E clique em "continue"
Quando clicar em "finish"
Então deve prosseguir para a página de Checkout: Completo
E aparecer a mensagem "Thank you for your order!".

```

</details>
<br> 

## Relatórios:
<div align="center">
<img width="700px" alt="Relatorio allure" src="https://i.imgur.com/zzsd1q" />
</div>

### Como executar o relatório:

```
npm run report:allure
```
