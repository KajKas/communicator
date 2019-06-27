import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import store from './redux/store'

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇 ", "background: purple; color: #FFF");
  console.log(store.getState());
}

render()
store.subscribe(render)
