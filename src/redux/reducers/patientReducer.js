import {  ADD_PATIENT, ONE_PATIENT, ALL_PATIENTS, TEST_PATIENT, UPDATE_TEST, UPDATE_SCREEN  } from "../types";

const initialState = {

  testpatient: {},
  newpatient:{},
  updatetest:{},
  updatescreen:{},
  onepatient:{},
  allpatients:[]

};

export default function(state = initialState, action) {
  switch (action.type) {
 
      case ADD_PATIENT:
        return {
          ...state, 
        newpatient: action.payload
        };

        case ALL_PATIENTS:
        return {
          ...state, 
        allpatients: action.payload
        };

        
        case TEST_PATIENT:
        return {
          ...state, 
        testpatient: action.payload
        };


        case UPDATE_TEST:
        return {
          ...state, 
        updatetest: action.payload
        };

        case UPDATE_SCREEN:
            return {
              ...state, 
            updatescreen: action.payload
            };


            case ONE_PATIENT:
            return {
              ...state, 
            onepatient: action.payload
            };





   
    default:
      return state;
  }
}
