import { combineReducers } from 'redux';
import session from './session_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';
import errors from './errors_reducer';
import modal from './modal_reducer';

const RootReducer = combineReducers({
  session,
  questions,
  answers,
  modal,
  errors
});

export default RootReducer;