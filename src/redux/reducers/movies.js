import { ActionTypes } from '../actionTypes';



export default function (state={
   movies: [
          
   ],
   pageNo: 1,
   totalPage: 1,

}, action) {

    switch(action.type) {
        case ActionTypes.movies.addToList:
          return {...state, movies: [...state.movies, ...action.data] }
       case ActionTypes.movies.setPageNo:
          return {...state, pageNo: action.data}; 
       case ActionTypes.movies.setTotalPage:
          return {...state, totalPage: action.data};    
        default:
          return state;
    }

}