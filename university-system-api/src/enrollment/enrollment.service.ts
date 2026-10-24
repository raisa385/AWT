import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
    constructor(private courseService: CourseService, @Inject(forwardRef(()=>NotificationService)) private notificationService: NotificationService){}

    enrollStudent(studentName:string, courseId:string){
        return{
            message: 'Student enrolled successfully',
            student: studentName,
            course:{message: 'course fetchced', id: this.courseService.getCourseById(courseId)}
        }
    }

    getEnrollments(){
        return {message: 'all enrollments fetched',data:[]}
    }
}
