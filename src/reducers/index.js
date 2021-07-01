// import * as types from '../actions/ActionTypes';
import { combineReducers} from "redux";
import color from  './color';
import number from  './number';

// const initialState = {
//     color: 'black',
//     number: 0
// };

// const counter = (state = initialState, action) => {
//     console.log('counter!!', state);
//     switch (action.type){
//         case types.INCREMENT:
//             return{
//                 ...state,
//                 number: state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number -1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;
//
//     }
// };
const reducer = combineReducers({
    number: number,
    color: color
});

export default reducer;
