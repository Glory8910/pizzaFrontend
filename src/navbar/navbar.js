import React from 'react'
import "./navbar.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"

import SubjectIcon from '@material-ui/icons/Subject';



export default function Navbar() {

  return (
  <>

<nav>


<input id="check" className="checking" type="checkbox">
</input>
<label className="checkicon" for="check">
  <SubjectIcon fontSize="large" />
</label>


<label><strong>Pizza Bytes</strong></label>

<ul>



  <li><Link className="anch" to="/buildpizza" >Build pizza
  
</Link></li>

 
<li><Link className="anch" to="/login">Sign Out
  
  </Link></li>

  <li><Link className="anch" to="/login">Sign In
  
  </Link></li>




</ul>




</nav>

    </> 
 


 
   
    )
}