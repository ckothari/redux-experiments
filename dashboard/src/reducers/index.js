import { combineReducers } from 'redux'
import dashboard from './dashboard';
const reducer = combineReducers({
  dashboard
});

export default reducer


// store = {
//   Card1: {
//     isFeching: false,
//     data: []
//   }
// };
