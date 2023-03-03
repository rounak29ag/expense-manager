import React, { useState } from 'react'

import './App.css';
import Login from "./components/Login";
import Register from './components/Register'

function App() {
  const [form,setForm]=useState("login");

  const toggleForm=(form)=>{
    setForm(form);
  }

  return (
    <div className='App'>
    {
      form === 'login'? <Login onFormSwitch= {toggleForm} /> : <Register onFormSwitch= {toggleForm} />
    }
    </div>
  );
}

export default App;
