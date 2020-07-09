import React from 'React';
import PropTypes from 'prop-types';

class CounterComp extends React.Component{
  constructor(props){
    super(props)
    console.info(props.value)
  }

  render(){
    return (
      <div>
        <h3>Counter</h3>
        <p>Num:{this.props.value}</p>
        <p>
          <button onClick={this.props.onIncrease}>+1</button>
          {' '}
          <button onClick={this.props.onDecrease}>-1</button>
          {' '}
          <button onClick={this.props.onDouble}>x2</button>
        </p>
      </div>
    )
  }

  static propTypes = {
    value: PropTypes.number.isRequired
  }
}

export default CounterComp