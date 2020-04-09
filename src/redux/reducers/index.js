import { combineReducers } from "redux";
import authReducer from "./authReducer"
import errorReducer from "./errorReducer";
import patientReducer from "./patientReducer";
import kitReducer from "./kitReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  patients:patientReducer,
  kits:kitReducer
 

});
