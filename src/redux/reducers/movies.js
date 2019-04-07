import { ActionTypes } from '../actionTypes';

export default function (state={

}, action) {

    switch(action.type) {
        case ActionTypes.movies.addToList:
          return state
        default:
          return state;
    }

}