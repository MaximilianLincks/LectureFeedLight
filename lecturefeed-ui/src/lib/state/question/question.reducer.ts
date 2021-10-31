import {Question} from "../../model/Question";
import {addQuestion} from "./question.action";
import {createReducer, on} from "@ngrx/store";


export const initialState: Question[] = []

export const questionsReducer = createReducer(
  initialState,
  on(addQuestion, addQuestionReducer)
);


function addQuestionReducer(state: Question[], { question }: { question: Question }): Question[]
{
  return [...state, question];
}
