import { Component } from '@angular/core';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnrollmentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
