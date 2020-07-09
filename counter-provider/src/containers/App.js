import { connect } from 'react-redux';
import CounterType from '../actions';
import CounterComp from '../components/CounterComp';

function mapStateToProps(state){
  return {
    value: state.value
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncrease: () => {
      console.info('in App')
      dispatch({
        type: CounterType.INCREASE
      })
    },
    onDecrease: () => {
      dispatch({
        type: CounterType.DECREASE
      })
    },
    onDouble: () => {
      dispatch({
        type: CounterType.DOUBLE
      })
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComp)

export default App