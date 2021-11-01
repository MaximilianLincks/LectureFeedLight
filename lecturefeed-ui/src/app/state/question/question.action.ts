import {createAction, props} from "@ngrx/store";
import {Question} from "../../model/Question";


export const addQuestion = createAction(
  '[Item Edit] Add Question',
  props<{ question: Question }>(),
);
