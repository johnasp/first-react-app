import React from "react"
import ReactDOM from "react-dom"
import './css/index.scss'; // Tell webpack about index.scss
import Logo from './images/logo192.png'; 
import Background from './images/logo512.png'

ReactDOM.render( 
   <div className="wrapper" style={{ backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat",  }}>
      <header>
         <div className="logo-header">
            <img src={Logo} alt="React logo" className="logo-img"  />
            <h1 className="logo-h1">ReactFacts</h1>
         </div>
         <nav className="header-nav">React Course - Project 1</nav>
      </header>
      <main className="content" >
         <h2>Fun facts about react</h2>
         <ul>
            <li>First released in 2013</li>
            <li>Created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers loads of enterise apps including mobile apps</li>
         </ul>  
      </main>
   </div>
   ,
   document.getElementById('root')
)
