 import { coursesDatabase, CourseType } from '../data/database'
 
 export function getCourseContentTitle(course: CourseType, level: string){
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

export function getCourseName(course: CourseType){
    return coursesDatabase[course].name
}