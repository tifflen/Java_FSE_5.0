import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { CourseCard } from './components/course-card/course-card';
import { CourseList } from './pages/course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, CourseCard,CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
