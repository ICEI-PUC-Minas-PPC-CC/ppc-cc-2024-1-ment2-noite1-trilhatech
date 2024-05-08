

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
        description: "Texto do curso de lógica",
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
    frontend: {
        name: "Front end",
        description: "Descrição do front end",
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
    }
    
    
}