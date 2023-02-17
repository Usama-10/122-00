// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'react-bootstrap';
import showData from './components/SMtable.js';




    function App() {
      let arr = [
        {
          id:1,
          title: "Hello world",
          desc: "Moiz",
          price: 123
        },
        {
          id:2,
          title: "Hello world",
          desc: "Usama",
          price: 123
        },
        {
          id:3,
          title: "Hello world", 
          desc: "usman",
          price: 123
        },
        {
          id:4,
          title: "Hello world",
          desc: "Nashi",
          price: 123
        }
       ]
      
      return (
        <div>
<showData data={arr}/>
        </div>
      
      );
    }
    
    export default App;
    
 
   


