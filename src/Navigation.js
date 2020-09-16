import React from 'react';
 
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
       <div className="navf">
           <div className="menus">
          <NavLink  style={{ marginRight: 15 , color:"white"}} to="/">Home</NavLink>
          <NavLink  style={{ marginRight: 15 , color:"white"}} to="/post">Posts</NavLink>
          </div>
        
       </div>
    );
}
 
export default Navigation;