import './App.css';
import  Test from './Test'
import Snack from './Snack'
import {BrowserRouter}from'react-router'
import React from 'react';
function App() {
   const [open, setOpen] = React.useState(false);
   const [text,settext]=React.useState("");
  return (
    
    <>
  <BrowserRouter>
  <Snack Open={open} Text={text}/>
  <Test Text={text} Open={setOpen} set={settext}/>
  </BrowserRouter>
  </>
  );
}

export default App;
