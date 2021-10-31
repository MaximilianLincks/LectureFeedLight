import {createSelector} from "@ngrx/store";
import {AppState} from "../../../admin/state/AppState";

export const selectQuestions = createSelector(
  (state: AppState) => state.questions,
  (questions) => Array.from(questions),
);
