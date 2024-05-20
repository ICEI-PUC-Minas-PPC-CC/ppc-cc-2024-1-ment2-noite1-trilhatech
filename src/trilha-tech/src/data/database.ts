
export type CourseTyoe = 'frontend' | 'logicaprogramacao'

export type LevelType = 'basic' | 'intermediate' | 'advanced'

export interface ContentProps {
    id: number,
    title: string,
    videoUrl: string,
    durationInMinutes: number,
    workBook: string,
    level: LevelType,
}

type CourseDataBase = {
    [key in CourseTyoe]: {
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
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
            {
                id: 2,
                title: "Variáveis",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ],
        intermediate: [
            {
                id: 10,
                title: "Repetição",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ],
        advanced: [
            {
                title: "Test",
                durationInMinutes: 10,
                id: 10,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                workBook: "apostila_c.pdf"
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
            },
            {
                id: 2,
                title: "Variáveis",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ],
        intermediate: [
            {
                id: 10,
                title: "Repetição",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ],
        advanced: [
            {
                title: "Test",
                durationInMinutes: 10,
                id: 10,
                level: "advanced",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                workBook: "apostila_c.pdf"
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
    [key in CourseTyoe]: {
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
                    question: "Qual dos seguintes tipos armazena um dado do tipo inteiro?",
                    includedContents: ['variaveis', 'tipos de dados'],
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