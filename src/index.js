import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store'

const render = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)
