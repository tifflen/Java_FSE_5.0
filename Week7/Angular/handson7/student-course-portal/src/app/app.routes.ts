import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';

import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseList
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },

  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile
  },

  {
    path: 'enroll',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/enrollment/enrollment-home/enrollment-home')
        .then(m => m.EnrollmentHome)
  },

  {
    path: 'reactive-form',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard]
  },

  {
    path: '**',
    component: NotFound
  }

];
