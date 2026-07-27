import { createReducer } from '@ngrx/store';

export interface CourseState {

  courses: any[];

  loading: boolean;

  error: any;

}

export const initialState: CourseState = {

  courses: [],

  loading: false,

  error: null

};

export const courseReducer = createReducer(

  initialState

);
