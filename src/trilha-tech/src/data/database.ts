
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
        name: "Lógica de programação",
        description: `Sugerimos que comece pelo básico onde ensinamos a instalar
                    e preparar a interface de desenvolvimento para seguirmos
                    com a trilha!`,
        basic: [
            {
                id: 1,
                title: "Configurando a IDE",
                videoUrl: "https://www.youtube.com/watch?v=baQLZxwRBuI",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
                contents: []
            },
            {
                id: 2,
                title: "Variáveis",
                videoUrl: "https://www.youtube.com/watch?v=B8BSUG_NoZg",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
                 contents: ["introducao"]
            },
        ],
        intermediate: [
            {
                id: 10,
                title: "Operadores matemáticos e condicionais em C",
                videoUrl: "https://www.youtube.com/watch?v=J0xjy722JP8",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
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
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                workBook: "apostila_c.pdf",
                 contents: ["repetição"]
            }
        ]
    },
    "frontend": {
        name: "Front-end",
        description: `Comece pela trilha básica pra ensinarmos a estruturação
                    de uma página web com o começo do HTML`,
        "basic": [
            {
                id: 1,
                title: "Configurando a IDE",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
                 contents: ["introducao"]
            },
            {
                id: 2,
                title: "Variáveis",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
                contents: ["introducao"]
            },
        ],
        intermediate: [
            {
                id: 10,
                title: "Estruturas condicionais",
                videoUrl: "https://youtu.be/J0xjy722JP8",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
                 contents: ["introducao"]
            },
        ],
        advanced: [
            {
                title: "Test",
                durationInMinutes: 10,
                id: 10,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                workBook: "apostila_c.pdf",
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
                }
            ]
        },
         advanced: {
            questions: [
                {
                    question: "Um loop for iniciado em i = 0 e repetido até atingir a condição de i = 5 irá se repetir quantas vezes?",
                    includedContents: ['variaveis', 'tipos de dados'],
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
                }
            ]
        }
    },
    frontend: {
        basic: {
            questions: [
                {
                    question: "Qual dos seguintes tipos armazena um dado do tipo inteiro?",
                    includedContents: ['variaveis', 'tiposdedados'],
                    answers: [
                        {
                            answerTitle: "float",
                            isCorrect: false
                        },
                        {
                            answerTitle: "int",
                            isCorrect: true
                        },
                        {
                            answerTitle: "char",
                            isCorrect: false
                        },
                        {
                            answerTitle: "double",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "HTML é uma linguagem de programação?",
                    includedContents: ['variaveis', 'tipos de dados'],
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
                }
            ]
        },
        intermediate: {
            questions: [
                {
                    question: "Qual o operador do tipo 'ou'?",
                    includedContents: ['Condicionais', 'Operadores relacionais', 'Operadores lógicos'],
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
                }
            ]
        },
         advanced: {
            questions: [
                {
                    question: "Um loop for iniciado em i = 0 e repetido até atingir a condição de i = 5 irá se repetir quantas vezes?",
                    includedContents: ['variaveis', 'tipos de dados'],
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
                }
            ]
        }
    },
}