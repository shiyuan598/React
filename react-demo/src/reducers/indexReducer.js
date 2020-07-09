import { UserMannType } from '../actions'

function indexReducer(state = false, action) {
  switch (action.type) {
    case UserMannType.LOG_IN:
      console.info('')
      return true;
    case UserMannType.LOG_OUT:
      return false;
    default:
      return state;
  }
}

export default indexReducer
