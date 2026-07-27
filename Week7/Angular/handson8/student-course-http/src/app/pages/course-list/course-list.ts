import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Course } from '../../models/course';
import { CourseService } from '../../services/courseService';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  errorMessage = '';

  loading = false;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadCourses();

  }

  loadCourses() {

    this.loading = true;

    this.courseService.getCourses().subscribe({

      next: (data) => {

        this.courses = data;

        this.loading = false;

      },

      error: (err) => {

        this.loading = false;

        this.errorMessage = err.message;

      }

    });

  }

  openCourse(id: string) {

    this.router.navigate(['/courses', id]);

  }

addCourse() {

  const nextId =
    (Math.max(...this.courses.map(c => Number(c.id))) + 1).toString();

  const course: Course = {

    id: nextId,

    name: 'React',

    code: 'RE101',

    credits: 4,

    status: 'ongoing'

  };

  this.courseService.createCourse(course).subscribe({

    next: () => this.loadCourses()

  });

}

  updateCourse() {

    const course: Course = {

      id: '1',

      name: 'Angular Updated',

      code: 'ANG101',

      credits: 5,

      status: 'passed'

    };

    this.courseService.updateCourse('1', course).subscribe({

      next: () => {

        this.loadCourses();

      },

      error: (err) => {

        this.errorMessage = err.message;

      }

    });

  }

  deleteCourse(id: string) {

    this.courseService.deleteCourse(id).subscribe({

      next: () => {

        this.loadCourses();

      },

      error: (err) => {

        this.errorMessage = err.message;

      }

    });

  }

}
