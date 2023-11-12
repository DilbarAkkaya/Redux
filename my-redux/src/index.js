import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import * as actions  from './actions.js';
import reducer from './reducer';

const store= createStore(reducer);
const { dispatch, subscribe, getState } = store;
const update = ()=>{
  document.getElementById('counter').textContent = getState().value;
}
/* const bindActionCreator = (creator, dispatch)=> (...args)=> {
  dispatch(creator(...args))
} */
const {inc, dec,rnd} = bindActionCreators(actions, dispatch);
/* const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch) */
subscribe(update);
document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', ()=>{
  const value = Math.floor(Math.random() * 10);
  rnd(value);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
