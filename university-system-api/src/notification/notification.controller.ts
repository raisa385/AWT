import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  sendNotification(@Body() data: { studentName: string; message: string }) {
    return this.notificationService.sendNotification(data.studentName, data.message);
  }

  @Post('check')
  checkEnrollment(@Body() data: { studentName: string; courseId: string }) {
    return this.notificationService.checkEnrollmentAndNotify(data.studentName, data.courseId);
  }
}
