import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course';

import * as CourseActions from '../../store/course/course.actions';

import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';

import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  loading$!: Observable<boolean>;

  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  enrolledCourseIds$!: Observable<string[]>;

  ngOnInit(): void {

  this.courses$ = this.store.select(selectAllCourses);

  this.loading$ = this.store.select(selectCoursesLoading);

  this.error$ = this.store.select(selectCoursesError);

  this.enrolledCourseIds$ = this.store.select(selectEnrolledCourseIds);

  this.store.dispatch(CourseActions.loadCourses());

}

enroll(id: string): void {

  this.store.dispatch(
    EnrollmentActions.enrollCourse({
      courseId: id
    })
  );

}

unenroll(id: string): void {

  this.store.dispatch(
    EnrollmentActions.unenrollCourse({
      courseId: id
    })
  );

}

}
