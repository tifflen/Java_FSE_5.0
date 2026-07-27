import { Component } from '@angular/core';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveEnrollmentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
