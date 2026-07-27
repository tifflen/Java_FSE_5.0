import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute
) {}

  ngOnInit(): void {

  this.courses = this.courseService.getCourses();

  this.searchTerm =
    this.route.snapshot.queryParamMap.get('search') ?? '';

}

  openCourse(id: number): void {
    this.router.navigate(['courses', id]);
  }
  searchTerm = '';

  searchCourse() {

  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );

}

}
