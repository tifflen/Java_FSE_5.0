import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';

import { SimpleChange, SimpleChanges } from '@angular/core';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  it('should create', () => {

  expect(component).toBeTruthy();

});

it('should call console.log on ngOnChanges', () => {

  spyOn(console, 'log');

  const changes: SimpleChanges = {

    course: new SimpleChange(

      null,

      {
        id: 1,
        name: 'Angular',
        code: 'ANG101',
        credits: 4,
        gradeStatus: 'passed'
      },

      true

    )

  };

  component.ngOnChanges(changes);

  expect(console.log).toHaveBeenCalled();

});

it('should emit enrollRequested when button is clicked', () => {

  component.course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  fixture.detectChanges();

  spyOn(component.enrollRequested, 'emit');

  const button = fixture.debugElement.query(By.css('button')).nativeElement;

  button.click();

  expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);

});

it('should display course name', () => {

  component.course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  fixture.detectChanges();

  const heading = fixture.debugElement.query(By.css('h3')).nativeElement;

  expect(heading.textContent).toContain('Data Structures');

});

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseCard]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

});
