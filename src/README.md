# Instruções de utilização

A aplicação foi criada utilizando React + Vite, logo, devem ser executados os seguintes passos para utilização local:

Observação: A máquina que está sendo instalada a aplicação deve ter instalado o Node, de preferência a versão mais atual estável (20.12.2 LTS)

1. Abra a pasta trilha-tech, localizada em "/src/trilha-tech
2. Execute o comando npm install para instalar todas as dependẽncias
3. Execute npm run dev para iniciar o projeto
4. No seu navegador, digite o endereço fornecido no resultado no comando anterior
  

## Instalação do Site

Link de hospedagem da aplicação: <a href='https://trilha-tech-9psd2qxa1-joaooliveirazzs-projects.vercel.app'>Visite-nos</a>

## Histórico de versões

### [0.1.0] - 30/04/24
#### Adicionado
- Adicionando dependências: React Router DOM v6
- Criando rotas: Criando uma rota principal para layout com suas rotas filhas, além disso, algumas rotas aninhadas também foram criadas
- Tratamento de erros: Criada uma rota para erro 404 (Not Found). Esta agora tem uma página especial para avisar ao usuário que ocorreu algum erro de redirecionamento

### [0.1.1] - 05/05/24
#### Adicionado
- Adicionando dependências: Tailwind ScrollBar
- Componentes: Criado um componente para cards de informações e seleção de dificuldades dos cursos
- Layout: Foi criado o layout principal da aplicação, com uma sidebar e listagem de trilhas disponíveis
- Tratamento de erros: Foi adicionada uma rota para quando não houver nenhum curso selecionado. Esta convida o usuário a começar um curso mais básico ou escolher outro dentre os disponíveis

