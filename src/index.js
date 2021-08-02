import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const openmenu=document.querySelector('.openmenu')
const Appheadermenu=document.querySelector('.App-header-menu')
const closemenu=document.querySelector('.closemenu')
 
openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
  Appheadermenu.style.display="flex";
  Appheadermenu.style.top="0"
}
function close(){
  Appheadermenu.style.top="-100%"
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
