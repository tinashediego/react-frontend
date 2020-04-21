import {
    GENDERMALE,
} from "../types";



const initialState = {
    demos: [],

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GENDERMALE:
            return {
                ...state,

                demos: action.payload
            };

        default:
            return state;
    }
}