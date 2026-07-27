import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule,CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

  }

}
