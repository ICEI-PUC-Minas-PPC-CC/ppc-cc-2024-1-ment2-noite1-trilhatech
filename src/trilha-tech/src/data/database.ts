
export type CourseType = 'frontend' | 'logicaprogramacao'

export type LevelType = 'basic' | 'intermediate' | 'advanced'

export interface ContentProps {
    id: number,
    title: string,
    videoUrl: string,
    durationInMinutes: number,
    workBook: string,
    level: LevelType,
    contents: Array<string>
}

type CourseDataBase = {
    [key in CourseType]: {
        name: string;
        description: string;
        basic: ContentProps[];
        intermediate: ContentProps[];
        advanced: ContentProps[];
    }
}


export const coursesDatabase: CourseDataBase = {
    logicaprogramacao: {
        name: "Lógica de Programação",
        description: `Sugerimos que comece pelo básico onde ensinamos a instalar
                    e preparar a interface de desenvolvimento para seguirmos
                    com a trilha!`,
        basic: [
            {
                id: 1,
                title: "Configurando a IDE",
                videoUrl: "https://www.youtube.com/watch?v=baQLZxwRBuI",
                durationInMinutes: 1.10,
                workBook: "apostilaC.pdf",
                level: "basic",
                contents: []
            },
            {
                id: 2,
                title: "Variáveis",
                videoUrl: "https://www.youtube.com/watch?v=B8BSUG_NoZg",
                durationInMinutes: 7.36,
                workBook: "apostilaC.pdf",
                level: "basic",
                 contents: ["introducao"]
            },
        ],
        intermediate: [
            {
                id: 10,
                title: "Operadores e Estruturas Condicionais",
                videoUrl: "https://www.youtube.com/watch?v=J0xjy722JP8",
                durationInMinutes: 6.2,
                workBook: "apostilaC.pdf",
                level: "basic",
                 contents: ["operadores"]
            },
        ],
        advanced: [
            {
                title: "Estruturas de repetição em C",
                durationInMinutes: 10,
                id: 10,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=-rSE1_a7CgA",
                workBook: "apostilaC.pdf",
                 contents: ["repeticao"]
            }
        ]
    },
    frontend: {
        name: "Front-End",
        description: `Comece pela trilha básica pra ensinarmos a estruturação
                    de uma página web com o começo do HTML`,
        basic: [
            {
                id: 1,
                title: "Instalação VSCode e introdução ao HTML",
                videoUrl: "https://www.youtube.com/watch?v=8t6nhBeRK3o",
                durationInMinutes: 7.16,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                 contents: ["introducao"]
            },
            {
                id: 2,
                title: "Formatação de Textos",
                videoUrl: "https://www.youtube.com/watch?v=IfFt5o7v8rE",
                durationInMinutes: 7.52,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["textos"]
            },
            {
                id: 3,
                title: "Imagens e Links",
                videoUrl: "https://youtu.be/JwRCI1c2Tsk",
                durationInMinutes: 7.47,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["incorporacao"]
            },
        ],
        intermediate: [
            {
                id: 1,
                title: "Style",
                videoUrl: "https://www.youtube.com/watch?v=KvdLyxNu28A",
                durationInMinutes: 5.54,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["style"]
            },
            {
                id: 2,
                title: "Tabelas e Listas",
                videoUrl: "https://www.youtube.com/watch?v=0JjhaoTtyTo",
                durationInMinutes: 7.28,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["tabelas_listas"]
            },
        ],
        advanced: [
            {
                id: 1,
                title: "Divs e Classes",
                durationInMinutes: 5.2,
                level: "advanced",
                videoUrl: "https://youtu.be/NtERM11C_Q8",
                workBook: "apostilaHTML.pdf",
                contents: ["divs"]
            },
            {
                id: 2,
                title: "CSS",
                durationInMinutes: 20.34,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=ArrkflVLnGo",
                workBook: "apostilaHTML.pdf",
                contents: ["css"]
            }
        ]
    }
    
    
}


export interface QuestionProps {
    question: string;
    includedContents: Array<string>
    answers: Array<{
        answerTitle: string;
        isCorrect: boolean;
    }>
}

export type QuizDataBaseType = {
    [key in CourseType]: {
        basic: {
            questions: Array<QuestionProps>
        }
        intermediate: {
            questions: Array<QuestionProps>
        }
        advanced: {
            questions: Array<QuestionProps>
        }
    }
}


export const QuizDataBase: QuizDataBaseType = {
    logicaprogramacao: {
        basic: {
            questions: [
                {
                    question: "Qual o nome da IDE que estamos utilizando para aprender linguagem C?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: "Code Blocks",
                            isCorrect: true
                        },
                        {
                            answerTitle: "CLion",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Visual Studio",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Pycharm",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual a extensão de arquivo geralmente é usada por códigos em C?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: ".py",
                            isCorrect: false,
                        },
                        {
                            answerTitle: ".c",
                            isCorrect: true,
                        },
                        {
                            answerTitle: ".java",
                            isCorrect: false,
                        },
                        {
                            answerTitle: ".cpp",
                            isCorrect: false
                        }

                    ]

                },
                {
                    question: "Qual é a saída padrão do C?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: "Aba do navegador",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Documento de texto",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Terminal",
                            isCorrect: true,
                        },
                        {
                            answerTitle: "Impressora",
                            isCorrect: false
                        }

                    ]

                },
                 {
                    question: "O que significa IDE?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: "Integrated design Environment",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Integrated Development Environment",
                            isCorrect: true,
                        },
                        {
                            answerTitle: "Internal Development Engine",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Internal Design Engine",
                            isCorrect: false
                        }

                    ]

                },
                 {
                    question: "Qual é a principal função do C?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: "Principal()",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Start()",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "main()",
                            isCorrect: true,
                        },
                        {
                            answerTitle: "run()",
                            isCorrect: false
                        }

                    ]

                },
                {
                    question: "Qual dos comandos é utilizado para criar um comentário de uma única linha em C?",
                    includedContents: ["introducao"],
                    answers: [
                        {
                            answerTitle: "--",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "/*",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "comment:",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "//",
                            isCorrect: true
                        }

                    ]

                },
                {
                    question: "O que é uma variável?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Um espaço na memória dedicado a armazenar um valor",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Um espaço na memória para armazenar um programa",
                            isCorrect: false
                        },
                        {
                            answerTitle: "A memória RAM do nosso computador",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Os valores digitados pelo usuário",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: "O que faz a função printf()?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Função para entrar com dados do usuário",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Função principal do nosso programa em C",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Função que mostra apenas números no terminal",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Função que mostra uma mensagem no terminal",
                            isCorrect: true
                        }
                    ]
                }
            ]
        },
        intermediate: {
            questions: [
                {
                    question: "Qual o operador do tipo 'ou'?",
                    includedContents: ['operadores'],
                    answers: [
                        {
                            answerTitle: "&&",
                            isCorrect: false
                        },
                        {
                            answerTitle: "||",
                            isCorrect: true
                        },
                        {
                            answerTitle: "!",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!=",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual o operador do tipo 'e'?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "&&",
                            isCorrect: true
                        },
                        {
                            answerTitle: "||",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!=",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual o operador do tipo 'diferente'?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "&&",
                            isCorrect: false
                        },
                        {
                            answerTitle: "||",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!=",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Qual o operador do tipo 'not'?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "&&",
                            isCorrect: false
                        },
                        {
                            answerTitle: "||",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!",
                            isCorrect: true
                        },
                        {
                            answerTitle: "!=",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual o operador de adição?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "*",
                            isCorrect: false
                        },
                        {
                            answerTitle: "+",
                            isCorrect: true
                        },
                        {
                            answerTitle: "-",
                            isCorrect: false
                        },
                        {
                            answerTitle: "/",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual o operador de divisão?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "+",
                            isCorrect: false
                        },
                        {
                            answerTitle: "%",
                            isCorrect: false
                        },
                        {
                            answerTitle: "//",
                            isCorrect: false
                        },
                        {
                            answerTitle: "/",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Qual operador é utilizado para obter o resto de uma divisão?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "%",
                            isCorrect: true
                        },
                        {
                            answerTitle: "||",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!",
                            isCorrect: false
                        },
                        {
                            answerTitle: "!=",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual das seguintes máscaras formata o nosso número com duas casas decimais?",
                    includedContents: ['operadores'],
                    answers: [
                         {
                            answerTitle: "%f.2",
                            isCorrect: false
                        },
                        {
                            answerTitle: "%float.2",
                            isCorrect: false
                        },
                        {
                            answerTitle: "%.2f",
                            isCorrect: true
                        },
                        {
                            answerTitle: "%format.2f",
                            isCorrect: false
                        },
                    ]
                }

            ]
        },
        advanced: {
            questions: [
                {
                    question: "Um loop for iniciado em i = 0 e repetido até atingir a condição de i = 5 irá se repetir quantas vezes?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "5",
                            isCorrect: false
                        },
                        {
                            answerTitle: "4",
                            isCorrect: true
                        },
                        {
                            answerTitle: "3",
                            isCorrect: false
                        },
                        {
                            answerTitle: "6",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Qual das opções é utilizada para separar as instruções de um loop for?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: ".",
                            isCorrect: false
                        },
                        {
                            answerTitle: ",",
                            isCorrect: false
                        },
                        {
                            answerTitle: ";",
                            isCorrect: true
                        },
                        {
                            answerTitle: ":",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: "Um loop for iniciado em i = 0 e repetido até atingir a condição de i = 5, qual será o valor de i na sua ulitma iteração?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "5",
                            isCorrect: true
                        },
                        {
                            answerTitle: "4",
                            isCorrect: false
                        },
                        {
                            answerTitle: "3",
                            isCorrect: false
                        },
                        {
                            answerTitle: "6",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Um loop while se repete até que: ",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "A variável de controle i atinja o número determinado",
                            isCorrect: false
                        },
                        {
                            answerTitle: "A sua condição seja satisfeita",
                            isCorrect: true
                        },
                        {
                            answerTitle: "O programa encerre",
                            isCorrect: false
                        },
                        {
                            answerTitle: "O usuário pare de entrar com dados à ele",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "O que significa a instrução while?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "Enquanto",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Portanto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Para",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Faça enquanto",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "O que faz a instrução Do While?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "Faz x iterações determinadas no código",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Executa apenas se a sua condição for verdadeira",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Executa pelo menos uma vez, após isso avalia a sua condição de parada",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Incrementa valor a uma variável a cada iteração",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Um loop while com a condição i < 5, só irá parar quando: ",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "i for maior ou igual a 5",
                            isCorrect: true
                        },
                        {
                            answerTitle: "i for menor que 5",
                            isCorrect: false
                        },
                        {
                            answerTitle: "i for maior que 5",
                            isCorrect: false
                        },
                        {
                            answerTitle: "i for igual a 5",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "O loop while executa no mínimo uma vez antes de começar a avaliar a sua condição de parada?",
                    includedContents: ['repeticao'],
                    answers: [
                        {
                            answerTitle: "Não",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Sim",
                            isCorrect: false
                        }
                    ]
                },
            ]
        }
    },
    frontend: {
        basic: {
            questions: [
                {
                    question: "Quais das alternativas a seguir é um elemento (tag):",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "src",
                            isCorrect: false
                        },
                        {
                            answerTitle: "href",
                            isCorrect: false
                        },
                        {
                            answerTitle: "title",
                            isCorrect: true
                        },
                        {
                            answerTitle: "alt",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "HTML é uma linguagem de programação?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Verdadeiro",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Falso",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: "Qual o editor de código que vamos utilizar?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Visual Studio",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Code Blocks",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Visual Studio Code",
                            isCorrect: true
                        },
                        {
                            answerTitle: "NetBeans",
                            isCorrect: false,
                        },
                    ]
                },
                {
                    question: "Qual a tag principal do HTML?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "H1",
                            isCorrect: false
                        },
                        {
                            answerTitle: "HTML",
                            isCorrect: true,
                        },
                        {
                            answerTitle: "Main",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Head",
                            isCorrect: false,
                        },
                    ]
                },
                {
                    question: "O que faz a extensão LiveServer?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Cria um servidor local para atualizar automaticamente as alterações",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Cria o nosso código HTML",
                            isCorrect: false,
                        },
                        {
                            answerTitle: "Adiciona estilos ao nosso projeto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria um servidor capaz de prover dados para testes do site",
                            isCorrect: false,
                        },
                    ]
                },
                {
                    question: "Qual a tag responsável pela quebra de linha no HTML?",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "<p>",
                            isCorrect: false
                        },
                        {
                            answerTitle: "<h1>",
                            isCorrect: false
                        },
                        {
                            answerTitle: "<div>",
                            isCorrect: false
                        },
                        {
                            answerTitle: "<br>",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: "Como fazer um comentário em HTML:",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "/* */",
                            isCorrect: false
                        },
                        {
                            answerTitle: "<!-- -->",
                            isCorrect: true
                        },
                        {
                            answerTitle: "//",
                            isCorrect: false
                        },
                        {
                            answerTitle: "#",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: "O que significa a tag H1?",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "Título de nível 1",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Primeiro parágrafo",
                            isCorrect: false
                        },
                        {
                            answerTitle: "O menor título",
                            isCorrect: false
                        },
                        {
                            answerTitle: "O titulo menos importante",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: "Qual das seguintes tags não é para formatação de texto?",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "mark",
                            isCorrect: false
                        },
                        {
                            answerTitle: "b",
                            isCorrect: false
                        },
                        {
                            answerTitle: "i",
                            isCorrect: false
                        },
                        {
                            answerTitle: "title",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: "Qual a função da tag B?",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "Texto itálico",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Texto com sublinhado",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Texto em negrito",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Texto na cor vermelha",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: "Qual o significado da tag p?",
                    includedContents: ['textos'],
                    answers: [
                        {
                            answerTitle: "Parágrafo",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Título de nível 2",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Itálico",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Principal tag do HTML",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Complete a linha de código: <img ___"imagem.png">`,
                    includedContents: ['incorporacao'],
                    answers: [
                        {
                            answerTitle: "src",
                            isCorrect: true
                        },
                        {
                            answerTitle: "alt",
                            isCorrect: false
                        },
                        {
                            answerTitle: "href",
                            isCorrect: false
                        },
                        {
                            answerTitle: "class",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que faz a tag img?`,
                    includedContents: ['incorporacao'],
                    answers: [
                        {
                            answerTitle: "Insere um vídeo",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere um parágrafo",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere um emoji",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere uma imagem",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `Complete: <a ___ = "https://google.com" />`,
                    includedContents: ['incorporacao'],
                    answers: [
                        {
                            answerTitle: "src",
                            isCorrect: false
                        },
                        {
                            answerTitle: "link",
                            isCorrect: false
                        },
                        {
                            answerTitle: "href",
                            isCorrect: true
                        },
                        {
                            answerTitle: "url",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Qual a função do atributo ALT em uma imagem?`,
                    includedContents: ['incorporacao'],
                    answers: [
                        {
                            answerTitle: "Insere um texto alternativo caso a imagem não carregue",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Insere a altura da imagem",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere uma imagem alternativa caso a imagem principal não carregue",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere uma legenda a nossa imagem",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que faz a tag a?`,
                    includedContents: ['incorporacao'],
                    answers: [
                        {
                            answerTitle: "Cria um arquivo na página",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Quebra uma linha de texto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria uma legenda para uma imagem",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria um hyperlink na nossa página",
                            isCorrect: true
                        }
                    ]
                },
            ]
        },
        intermediate: {
            questions: [
                {
                    question: `O que faz a tag style?`,
                    includedContents: ['style'],
                    answers: [
                        {
                            answerTitle: "Possibilita inserir estilos a uma tag",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Possibilita inserir estilos apenas a textos",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere estilos externos a nossa página",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Possibilita a estilização de imagens apenas",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que faz a propriedade color?`,
                    includedContents: ['style'],
                    answers: [
                        {
                            answerTitle: "Altera a cor de fundo de um elemento",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a cor de uma imagem",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a cor da fonte de um elemento",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Altera a cor de borda de um elemento",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que faz a propriedade font-size?`,
                    includedContents: ['style'],
                    answers: [
                        {
                            answerTitle: "Altera o tamanho de uma imagem",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera o espaço entre letras de um texto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera o espaço entre os parágrafos",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera o tamanho da fonte de um texto",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `O que faz a propriedade backgorund-color?`,
                    includedContents: ['style'],
                    answers: [
                        {
                            answerTitle: "Altera a cor de fonte de um texto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a cor de fundo de um elemento",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Coloca uma imagem de fundo a um elemento",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a cor de fundo de todos os elementos da página simultâneamentes",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que faz a propriedade font-family?`,
                    includedContents: ['style'],
                    answers: [
                        {
                            answerTitle: "Altera o tipo de fonte",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Altera a cor de fonte de um texto",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a cor de fundo",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Insere uma imagem em HTML",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Qual a função da tag UL`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "Indica a criação de uma lista ordenada",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Indica a criação de uma lista não ordenada",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Adiciona um título para a lista",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria uma margem na lista",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Qual a função da tag OL`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "Texto em negrito",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Indica a criação de uma lista não ordenada",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Adiciona um título para a lista",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Indica a criação de uma lista ordenada",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `Qual a função da tag DL`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "Indica a criação de uma lista não ordenada",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Indica a criação de uma lista com descrição",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Indica a criação de uma lista ordenada",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Indica a criação de uma lista ordenada",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Qual a tag que marca o início de uma tabela?`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "tr",
                            isCorrect: false
                        },
                        {
                            answerTitle: "li",
                            isCorrect: false
                        },
                        {
                            answerTitle: "table",
                            isCorrect: true
                        },
                        {
                            answerTitle: "dt",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que a tag TR faz?`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "Cria uma linha na tabela",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Cria uma célula na tabela",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cabeçalho da tabela",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Margens internas da tabela",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `O que a tag TH faz?`,
                    includedContents: ['tabelas_listas'],
                    answers: [
                        {
                            answerTitle: "Cria uma célula na tabela",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria uma linha na tabela",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cabeçalho da tabela",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Cria uma lista dentro da tabela",
                            isCorrect: false
                        }
                    ]
                },
            ]
        },
         advanced: {
            questions: [
                {
                    question: `Qual a função da tag DIV?`,
                    includedContents: ['divs'],
                    answers: [
                        {
                            answerTitle: "Estilização do site",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Gera um código no site",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Quebra a linha em dois lugares diferentes ao mesmo tempo",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Divide o código do site em blocos",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `Qual a função do atributo class?`,
                    includedContents: ['divs'],
                    answers: [
                        {
                            answerTitle: "Identifica um elemento do código que vai receber estilização da class atribuída",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Divide o código do site em blocos",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Quebra a linha no site",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Estiliza os texto de um elemento",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `A tag div sozinha tem capacidade de estilização do código`,
                    includedContents: ['divs'],
                    answers: [
                        {
                            answerTitle: "Verdadeiro",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Falso",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `Uma mesma class pode ser atribuída para elementos diferentes`,
                    includedContents: ['divs'],
                    answers: [
                        {
                            answerTitle: "Verdadeiro",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Falso",
                            isCorrect: false
                        }
                    ]
                },
                {
                    question: `Caso uma tag div receba um atributo class, mesmo assim, a estilização acontecerá no site inteiro`,
                    includedContents: ['divs'],
                    answers: [
                        {
                            answerTitle: "Verdadeiro",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Falso",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `O que o :hover faz no código CSS?`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Cria uma estilização condicional caso o cursor do mouse esteja posicionado em cima do elemento",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Cria uma estilização padrão",
                            isCorrect: false
                        },
                        {
                            answerTitle: "O Hover é uma propriedade padrão do CSS como a font-size",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Cria uma estilização condicional caso o usuário clique em cima do elemento",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: `Qual a estilização da propriedade border-radius?`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Altera a cor das bordas do elemento",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera as extremidades das bordas tornando-as mais redondas",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Altera o tamanho em pixels da borda de um elemento",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera o tipo de borda",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: `Qual a estilização da propriedade float?`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Altera o tamanho em pixels de um elemento",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Altera a altura do elemento HTML",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Adiciona uma mensagem de erro flutuante caso o elemento não seja exibido corretamente",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Faz um elemento HTML flutuar para a direção definida",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: `O solid é o único estilo de borda do HTML`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Verdadeiro",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Falso",
                            isCorrect: true
                        }
                    ]
                },
                {
                    question: `Qual a utilidade do text-decoration:none nos hyperlinks criados com a tag A?`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Remove a cor azul padrão dos hyperlinks do navegador",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Remove o sublinhado do hyperlink",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Muda a fonte de um hyperlink",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Muda o tamanho da fonte de um hyperlink",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: `Qual a função da propriedade list-style-type?`,
                    includedContents: ['css'],
                    answers: [
                        {
                            answerTitle: "Mdua o conteúdo escrito na lista para a estilização padrão de títulos",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Remove o sublinhado de um elemento da lista",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Muda o estilo do marcador de tópicos de uma lista",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Muda o tipo de lista diretamente do CSS",
                            isCorrect: false
                        },
                    ]
                },
                ]
        }
    },
}