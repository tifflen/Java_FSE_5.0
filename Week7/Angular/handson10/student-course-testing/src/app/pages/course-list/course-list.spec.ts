import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;

  let fixture: ComponentFixture<CourseList>;

  let store: MockStore;

  const initialState = {

    course: {

      courses: [

        {

          id: 1,

          name: 'Angular'

        },

        {

          id: 2,

          name: 'Java'

        }

      ],

      loading: false,

      error: null

    }

  };

beforeEach(async () => {

  await TestBed.configureTestingModule({

    imports: [CourseList],

    providers: [

      provideMockStore({

        initialState

      })

    ]

  }).compileComponents();

  fixture = TestBed.createComponent(CourseList);

  component = fixture.componentInstance;

  store = TestBed.inject(MockStore);

  fixture.detectChanges();

});

it('should create', () => {

  expect(component).toBeTruthy();

});

it('should display all courses from store', () => {

  fixture.detectChanges();

  const cards = fixture.debugElement.queryAll(By.css('.course-card'));

  expect(cards.length).toBe(2);

});

it('should show loading indicator', () => {

  store.setState({

    course: {

      courses: [],

      loading: true,

      error: null

    }

  });

  fixture.detectChanges();

  const loading = fixture.debugElement.query(By.css('.loading'));

  expect(loading).toBeTruthy();

});

});
