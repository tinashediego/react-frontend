import { combineReducers } from "redux";
import authReducer from "./authReducer"
import errorReducer from "./errorReducer";
import patientReducer from "./patientReducer";
import kitReducer from "./kitReducer";

import alertReducer from './alertReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  patients:patientReducer,
  kits:kitReducer,

  alert:alertReducer

});
