import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { useState } from 'react';


function App() {

  const current_theme = localStorage 
  const [theme, setTheme]= useState('light');
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
