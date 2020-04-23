import {  UPDATE_KIT, ADD_KIT, ALL_KITS, ONE_KIT  ,ALL_FACILITY ,ADD_FACILITY, } from "../types";

const initialState = {
  updatekit:{},
  onekit:{},
  newkit:{},
  newfacility:{},
  allkits:[],
  allfacility:[]

};

export default function(state = initialState, action) {
  switch (action.type) {
 
      case ADD_KIT:
        return {
          ...state, 
        newkit: action.payload
        };
        case ADD_FACILITY:
        return {
          ...state, 
        newfacility: action.payload
        };

        case ALL_KITS:
        return {
          ...state, 
        allkits: action.payload
        };


        case ALL_FACILITY:
          return {
            ...state, 
          allfacility: action.payload
          };
  
        
        case ONE_KIT:
        return {
          ...state, 
        onekit: action.payload
        };

        case UPDATE_KIT:
            return {
              ...state, 
            updatekit: action.payload
            };
    

    default:
      return state;
  }
}
