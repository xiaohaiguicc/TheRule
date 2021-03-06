import { combineReducers } from 'redux';

import sessionErrorsReducer from '../errors/session_errors_reducer';
import projectErrorsReducer from '../errors/project_errors_reducer';
import stepErrorsReducer from '../errors/step_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: projectErrorsReducer,
  step: stepErrorsReducer,
  comment: commentErrorsReducer

});

export default errorsReducer;
