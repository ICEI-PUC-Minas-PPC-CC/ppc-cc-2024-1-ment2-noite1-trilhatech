
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
                title: "Instalação VSCode",
                videoUrl: "https://www.youtube.com/watch?v=8t6nhBeRK3o",
                durationInMinutes: 7.16,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                 contents: []
            },
            {
                id: 2,
                title: "Formatação de Textos",
                videoUrl: "https://www.youtube.com/watch?v=IfFt5o7v8rE",
                durationInMinutes: 7.52,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["introducao"]
            },
            {
                id: 3,
                title: "Imagens e Links",
                videoUrl: "https://youtu.be/JwRCI1c2Tsk",
                durationInMinutes: 7.47,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["introducao"]
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
                contents: ["introducao"]
            },
            {
                id: 2,
                title: "Tabelas e Listas",
                videoUrl: "https://www.youtube.com/watch?v=0JjhaoTtyTo",
                durationInMinutes: 7.28,
                workBook: "apostilaHTML.pdf",
                level: "basic",
                contents: ["introducao"]
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
                contents: ["introducao"]
            },
            {
                id: 2,
                title: "CSS",
                durationInMinutes: 20.34,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=ArrkflVLnGo",
                workBook: "apostilaHTML.pdf",
                contents: ["introducao"]
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
                    question: "Qual a tag responsável pela quebra de linha no HTML?",
                    includedContents: ['introducao'],
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
                    question: `Complete a linha de código: <img ___"imagem.png">`,
                    includedContents: ['introducao'],
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
                    question: "Como fazer um comentário em HTML:",
                    includedContents: ['introducao'],
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
                }
            ]
        },
        intermediate: {
            questions: [
                {
                    question: "Como ATRIBUTO, o style deve ser inserido em que lugar no código?",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Em outro arquivo de extensão .html",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Dentro da tag de abertura do elemento a ser modificado",
                            isCorrect: true
                        },
                        {
                            answerTitle: "Em um arquivo de extensão .css",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Entre a abertura e fechamento da tag <head>",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                }
            ]
        },
         advanced: {
            questions: [
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "Dentre as opções abaixo, qual delas não é um tipo de lista em HTML:",
                    includedContents: ['introducao'],
                    answers: [
                        {
                            answerTitle: "Lista não ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista ordenadas",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista com descrições",
                            isCorrect: false
                        },
                        {
                            answerTitle: "Lista de prioridades",
                            isCorrect: true
                        },
                    ]
                }
            ]
        }
    },
}