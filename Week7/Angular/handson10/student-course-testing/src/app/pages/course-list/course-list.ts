import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html'
})
export class CourseList {

  courses$;

  loading$;

  constructor(private store: Store<any>) {

    this.courses$ = this.store.select(
      state => state.course.courses
    );

    this.loading$ = this.store.select(
      state => state.course.loading
    );

  }

}
