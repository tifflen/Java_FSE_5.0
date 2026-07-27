import { Injectable, signal } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  enrolledCourseIds = signal<number[]>([]);

  constructor(private courseService: CourseService) {}

  enroll(id: number) {
    this.enrolledCourseIds.update(ids =>
      ids.includes(id) ? ids : [...ids, id]
    );
  }

  unenroll(id: number) {
    this.enrolledCourseIds.update(ids =>
      ids.filter(x => x !== id)
    );
  }

  isEnrolled(id: number) {
    return this.enrolledCourseIds().includes(id);
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds()
      .map(id => this.courseService.getCourseById(id))
      .filter((c): c is Course => c !== undefined);
  }

}
