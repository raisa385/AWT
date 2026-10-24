import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(){
        return {message: 'get all courses', data:[]};
    }
    getCourseById(id:string){
        return{message:'course fetched',id:id};
    }
    createCourse(name:string, code:string){
        return {message: 'course created', data:{name,code}};
    }
}
