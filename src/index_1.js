import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {legacy_createStore as createStore} from 'redux';
import {ADDONE,SQUARE} from './action/action'
import REDUCER from './reducer/reducer'

const srore = createStore(REDUCER)

srore.dispatch(ADDONE(1))

console.log(srore.getState()); // 10

srore.dispatch(SQUARE())

console.log(srore.getState()); //22

const APP = ()=>{
  const ADDclick = () =>{
    console.log(111);
    srore.dispatch(ADDONE(1))
  }

  return <div>
    <button onClick={ADDclick}>增加</button>
    <div>{srore.getState()}</div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
  root.render(
    <APP />
  );
}
render()

srore.subscribe(render)

