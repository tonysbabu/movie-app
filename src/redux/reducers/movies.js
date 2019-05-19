import { ActionTypes } from '../actionTypes';
import poster1 from '../../Images/poster1.jpg';
import poster2 from '../../Images/poster2.jpg';
import poster3 from '../../Images/poster3.jpg';
import poster4 from '../../Images/poster4.jpg';
import poster5 from '../../Images/poster5.jpg';
import poster6 from '../../Images/poster6.jpg';
import poster7 from '../../Images/poster7.jpg';
import poster8 from '../../Images/poster8.jpg';
import poster9 from '../../Images/poster9.jpg';


export default function (state={
   movies: [
          
        {
          id: 1,
          name:'a',
          image: poster1
        },
        {
          id: 2,
          name:'b',
          image: poster2
        },
        {
          id: 3,
          name:'b',
          image: poster3
        },
        {
          id: 4,
          name:'d',
          image: poster4
        },
        {
          id: 5,
          name:'e',
          image: poster5
        },
        {
          id: 6,
          name:'f',
          image: poster6
        },
        {
          id: 7,
          name:'g',
          image: poster7
        },
        {
          id: 8,
          name:'h',
          image: poster8
        },
        {
          id: 9,
          name:'i',
          image: poster9
        },
        {
          id: 10,
          name:'j',
          image: poster1
        },
        {
          id: 11,
          name:'k',
          image: poster1
        },


   ]

}, action) {

    switch(action.type) {
        case ActionTypes.movies.addToList:
          return state
        default:
          return state;
    }

}