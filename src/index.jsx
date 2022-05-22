import React from "react"
import ReactDOM from "react-dom"
import './css/index.scss'; // Tell webpack about index.scss
import logo from './images/logo192.png'; // Telling webpack that index.js uses this image file

ReactDOM.render( 
   <div className="wrapper">
      <header>
         <div>
            <img src={logo} alt="React logo"  />
            <h1>ReactFacts</h1>
         </div>
         <nav>React Course - Project 1</nav>
      </header>
      <div className="content">
         <h2>Fun facts about react</h2>
         <ol>
            <li>First released in 2013</li>
            <li>Created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers loads of enterise apps including mobile apps</li>
         </ol>  
      </div>
   </div>
   ,
   document.getElementById('root')
)
