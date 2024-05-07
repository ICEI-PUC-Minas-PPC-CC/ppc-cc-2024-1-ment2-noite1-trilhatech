export interface CourseProps {
    id: number,
    title: string,
    videoUrl: string,
    durationInMinutes: number,
    workBook: string,
    level: "basic" | "intermediate" | "advanced",
}

export interface courseDataBaseProps {
   [key: string]: {
        name: string,
        description: string,
        [key: string]: string | CourseProps[],
    }
}

export const coursesDatabase: courseDataBaseProps = {
    "logicaprogramacao": {
        name: "Lógica de programação",
        description: "Texto do curso de lógica",
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
        "intermediate": [
            {
                id: 10,
                title: "Repetição",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ]
    },
    "frontend": {
        name: "Front-end",
        description: "Texto do curso de Front end",
        "basic": [
            {
                id: 3,
                title: "Configurando o Vs Code",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
            {
                id: 4,
                title: "Css",
                videoUrl: "https://www.youtube.com/watch?v=gaSeRTDgt8U",
                durationInMinutes: 8.27,
                workBook: "apostila_c.pdf",
                level: "basic",
            },
        ]
    },
    
}