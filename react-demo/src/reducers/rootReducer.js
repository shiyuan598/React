import { combineReducers } from 'redux'
import isLogin from './indexReducer';

console.info(isLogin)
var rootReducer = combineReducers({
  isLogin
})

export default rootReducer
