import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models/course';
import { CourseService } from '../../services/courseService';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;

  errorMessage='';

  loading=false;

  constructor(
    private route: ActivatedRoute,
    private service: CourseService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.loading=true;

    const id=this.route.snapshot.paramMap.get('id');

    if(id){

      this.service.getCourseById(id).subscribe({

        next:(data)=>{

          this.course=data;

          this.loading=false;

        },

        error:(err)=>{

          this.loading=false;

          this.errorMessage=err.message;

        }

      });

    }

  }

  goBack(){

    this.router.navigate(['/courses']);

  }

}
