import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import {
  map,
  tap,
  catchError,
  retry,
  switchMap
} from 'rxjs/operators';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  // ===========================
  // GET ALL COURSES
  // ===========================

  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      retry(2),

      tap(() => console.log('Courses Loaded Successfully')),

     map(courses =>
  courses.sort((a, b) => Number(a.id) - Number(b.id))
),

      catchError(this.handleError)

    );

  }

  // ===========================
  // GET COURSE BY ID
  // ===========================

  getCourseById(id: string): Observable<Course> {

    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(

      retry(2),

      tap(() => console.log('Course Loaded')),

      catchError(this.handleError)

    );

  }

  // ===========================
  // CREATE COURSE
  // ===========================

  createCourse(course: Course): Observable<Course> {

    return this.http.post<Course>(this.apiUrl, course).pipe(

      tap(() => console.log('Course Added')),

      catchError(this.handleError)

    );

  }

  // ===========================
  // UPDATE COURSE
  // ===========================

  updateCourse(id: string, course: Course): Observable<Course> {

    return this.http.put<Course>(`${this.apiUrl}/${id}`, course).pipe(

      tap(() => console.log('Course Updated')),

      catchError(this.handleError)

    );

  }

  // ===========================
  // DELETE COURSE
  // ===========================

  deleteCourse(id: string): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(

      tap(() => console.log('Course Deleted')),

      catchError(this.handleError)

    );

  }

  // ===========================
  // SWITCHMAP DEMO
  // ===========================

  reloadCourse(id: string): Observable<Course> {

    return this.deleteCourse(id).pipe(

      switchMap(() => this.getCourseById(id))

    );

  }

  // ===========================
  // ERROR HANDLER
  // ===========================

  handleError(error: any) {

    console.error(error);

    return throwError(() => new Error('Something went wrong'));

  }

}
