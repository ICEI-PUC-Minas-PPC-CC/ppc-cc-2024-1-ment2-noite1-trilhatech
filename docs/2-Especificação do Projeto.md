# Especificações do Projeto

## Personas

|**João Silva**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-1-ment2-noite1-trilhatech/blob/main/docs/img/joaosilva.png" width="200" height="200"/>|**Idade:** 17 anos.<br>**Naturalidade:** Santo André - SP.<br>**Ocupação:** Estudante.       |**Atribuições:** Estudante do ensino médio da rede estadual. 
|**Motivações:** Quer um direcionamento na área de programação para começar os estudos durante o ensino médio para ganhar um tempo extra na formação profissional.  |**Frustações:** Está perdido na tecnologia devido aos diferentes ramos que  permeiam o assunto e ainda não sabe como começar os estudos.   |**Hobbies, história:** Desde cedo tem contato direto com a tecnologia e a internet e tem a visão de que o ramo tecnológico é promissor e ascendente, por isso, demonstra interesse em começar a estudar programação.

|**Larissa Santos**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-1-ment2-noite1-trilhatech/blob/main/docs/img/larissasantos.png" width="200" height="200"/>|**Idade:** 19 anos.<br>**Naturalidade:** Itaí - SP.<br>**Ocupação:** Atendente de loja.       |**Atribuições:** Trabalha com atendimento ao público em uma loja de roupas, estudante autodidata de programação. 
|**Motivações:** Deseja aprimorar seus conhecimentos em programação para em um futuro próximo conseguir um emprego definitivo na área.  |**Frustações:** Se sente perdida em meio aos avanços da tecnologia e ainda não sabe aprimorar seus conhecimentos.   |**Hobbies, história:** Atualmente trabalha como atendente para complementar a sua renda e almeja conseguir sua primeira vaga no mercado de tecnologia.

|**Anderson Mattos**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-1-ment2-noite1-trilhatech/blob/main/docs/img/andersonmattos.png" width="200" height="200"/>|**Idade:** 21 anos.<br>**Naturalidade:** Niterói - SP.<br>**Ocupação:** Auxiliar administrativo.       |**Atribuições:** Ajuda a gerenciar documentos, pessoas, convoca reuniões e lida com finanças. 
|**Motivações:** Quer saber as oportunidades que a carreira tecnológica oferece.  |**Frustações:** Encontra-se indeciso sobre a sua atual carreira profissional e deseja novos ares, mas, ainda não encontrou o seu novo lugar de fato.   |**Hobbies, história:** Quer ter o sucesso financeiro e profissional fazendo algo que gosta, sem ter que lidar com o estresse do dia a dia somado ao fato de que está fazendo algo que não lhe dá prazer.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

Exemplo:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Silva | Instruções | Iniciar meus estudos |
|João Silva | Cronograma de estudos | Organizar meu tempo acadêmico |
|Larissa Santos | Evoluir minhas habilidades | Conseguir meu primeiro emprego |
|Larissa Santos | Direcionamento | Poupar tempo em meus estudos |
|Anderson Mattos | Entender sobre a atuação da tecnologia no mercado de trabalho | Ponderar sobre a escolha de mudança de carreira |
|Anderson Mattos | Aprender o básico sobre programação | Saber se a nova área que eu penso em seguir realmente é pra mim |

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve apresentar conteúdos educativos sobre programação | ALTA | 
|RF-002| A aplicação deve permitir que os conteúdos apresentados possam ser baixados em PDF | ALTA |
|RF-003| A aplicação deve permitir que seja vinculado a cada conteúdo um ou mais testes de conhecimento. Cada teste deverá ter um  nível de dificuldade (Fácil, médio e difícil) | ALTA |
|RF-004| A aplicação deve verificar se cada resposta está correta ou não | ALTA |
|RF-005| Ao término de cada teste a aplicação deve gerar um relatório de erros/acertos | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | ALTA | 
|RNF-002| A aplicação deve ser desenvolvida considerando as Heurísticas de usabilidade de Nielsen |  ALTA | 
|RNF-003| A aplicação deve ser construída de forma componentizada | ALTA |
|RNF-004| A aplicação deve ser construída com a biblioteca React do Javascript | ALTA |
|RNF-005| A aplicação deve utilizar ferramentas disponíveis na maior parte dos navegadores web | MÉDIA |
|RNF-006| Os conteúdos baixados da aplicação devem ser no formato PDF | MÉDIA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

### Artefatos para levantamento de dados

Nesta seção, caso seu grupo vá realizar algum tipo de levantamento de dados/entrevistas, descreva o(s) artefato(s) produzidos para tal. Também deverá ser descrita qual estratégia será utilizada para este levantamento. Por exemplo: como os questionários serão aplicados? (_in loco_, via disponibilização pela _web_ etc), qual material/estratégia de divulgação será utilizado? 

Não se preocupe em descrever os resultados agora, eles deverão ser descritos apenas na seção "Detalhamento preliminar" (Etapa 03).
