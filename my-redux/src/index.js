import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import {inc, dec, rnd} from './actions.js';
import reducer from './reducer';

const store= createStore(reducer);
const { dispatch, subscribe, getState } = store;
const update = ()=>{
  document.getElementById('counter').textContent = getState().value;
}
const bindActionCreator = (creator, dispatch)=> (...args)=> {
  dispatch(creator(...args))
}
const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch)
subscribe(update);
document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', ()=>{
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
