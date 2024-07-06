import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//components
import Bg from './components/bg';
import TitlePage from './components/TitlePage';
import Login from './components/Login';
import Register from './components/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bg/>
    <TitlePage/>
    
    <Register/>
  </React.StrictMode>
);

/**  
 * <Login/>
*/