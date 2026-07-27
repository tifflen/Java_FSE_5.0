import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = "Student Course Portal";
  isActive = true;
  message = "";
  searchCourse = "";
  coursesCount = 0;

  ngOnInit() {
    this.coursesCount = 12;
    console.log("Home Component Initialized");
  }

  ngOnDestroy() {
    console.log("Home Component Destroyed");
  }

  enrollCourse() {
    this.message = "Enrollment successful";
  }
}
