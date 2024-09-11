import React from 'react';

import './App.css';
//import Logo  from './logo.js';
import './navbar';
import Footer from './Footer';
import Navbar from './navbar';
import Buttons from './Buttons'
  const StylishBackground = () => {
    return (
      
      <div className="background" >
      <center>
  
      </center>
      <Navbar/>
      <div className="headingStyle">
      <h5 >Daniel Gallego school</h5>
      </div>
   <center>
   <div className="heading">
     You can help<br/> and make a difference
     </div></center> 
     <center>
     <div className="heading2"></div>
     </center>
<Buttons/>
<Footer/>
    </div>

    );
  };
  
 
export default StylishBackground;