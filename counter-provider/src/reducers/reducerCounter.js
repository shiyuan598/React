import CounterType from '../actions';

const reducerCounter = (state={value:8, num:2}, action)=>{
  switch (action.type) {
    case CounterType.INCREASE:  // 不能直接修改state，不起作用
      return {
        value: state.value + 1,
        num: 100
      }
    case CounterType.DECREASE:
      return {
        value: state.value - 1,
        num: 99
      }
    case CounterType.DOUBLE:
      return {
        value: state.value * 2,
        num: 200
      }
    default:
      return state
  }
}

export default reducerCounter