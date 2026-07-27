import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from '../models/course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],

      providers: [CourseService]

    });

    service = TestBed.inject(CourseService);

    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should handle HTTP error', () => {

  service.getCourses().subscribe({

    next: () => fail('Expected an error'),

    error: (error) => {

      expect(error.status).toBe(500);

      expect(error.statusText).toBe('Server Error');

    }

  });

  const req = httpMock.expectOne('http://localhost:3000/courses');

  req.flush(
    'Something went wrong',
    {
      status: 500,
      statusText: 'Server Error'
    }
  );

});

  it('should return all courses', () => {

  const mockCourses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 5,
      gradeStatus: 'ongoing'
    }

  ];

  service.getCourses().subscribe(courses => {

    expect(courses.length).toBe(2);

    expect(courses).toEqual(mockCourses);

  });

  const req = httpMock.expectOne('http://localhost:3000/courses');

  expect(req.request.method).toBe('GET');

  req.flush(mockCourses);

});

});
