import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducerCounter from './reducers/reducerCounter';
import App from './containers/App';
import './index.css';

const store = createStore(reducerCounter)

const render = ()=> ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

render()
store.subscribe(render)