import { combineReducers } from "redux";
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

import { authentication } from "./authentication.reducer";
import { userReducer as user } from "./users.reducer";
import { jobReducer as job } from "reducers/job.reducer";

const rootReducer = combineReducers({
  authentication,
  user,
  loadingBar,
  job,
});

export default rootReducer;
