import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseSummaryWidget } from './components/course-summary-widget/course-summary-widget';
import { StudentProfile } from './pages/student-profile/student-profile';
import { Notification } from './components/notification/notification';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    CourseList,
    CourseSummaryWidget,StudentProfile,Notification
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
