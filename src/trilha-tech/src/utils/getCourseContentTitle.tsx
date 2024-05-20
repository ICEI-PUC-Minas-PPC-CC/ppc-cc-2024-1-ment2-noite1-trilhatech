 import { coursesDatabase, CourseTyoe } from '../data/database'
 
 export function getCourseContentTitle(course: CourseTyoe, level: string){
         switch(level){
            case "basic":
              level = "básico";
              break;
            case 'intermediate':
              level = 'intermediário';
              break;
            case 'advanced':
              level = 'avançado';
              break;
        }

      return `Curso ${level} de ${coursesDatabase[course].name}` 
}

export function getCourseName(course: CourseTyoe){
    return coursesDatabase[course].name
}