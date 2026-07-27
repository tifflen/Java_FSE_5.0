import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseCount = this.courseService.getCourses().length;

  }

}
