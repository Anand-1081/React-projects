import React from "react";
import { Link } from "react-router-dom";
 const Nav = () => {
  return (
    <div className="text-black bg-blue-500 flex justify-between p-4 gap-4 h-20 items-center">    
       <div><h1 > navigation page</h1></div>
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
        
     </div>
  );  
        }
        export default Nav