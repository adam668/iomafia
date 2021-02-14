import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Startpage from './Startpage/Startpage';

ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
    <Startpage />
    </BrowserRouter>
  </React.StrictMode>),
  document.getElementById('root')
);

// OLD CODE 
// document.addEventListener('mousemove', (e: MouseEvent) => {
//   let body = document.getElementById('body')
//   if (body) body.style.backgroundPosition = `${e.clientX / 150 - 140}px ${e.clientY / 150 - 140}px`
//   else console.log('Not working!')
// })
