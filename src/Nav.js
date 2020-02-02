
import React from "react";
import { Link } from "react-router-dom";



class Nav extends React.Component {
    render() {
       return (
 
          <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Rum"><li>Rum</li></Link>
                <Link to="/Gin"><li>Gin</li></Link>
            </ul>

          </nav>
        
       )
    }
 }
 export default Nav;