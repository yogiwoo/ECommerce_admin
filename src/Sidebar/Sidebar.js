import React from "react";
import "./Sidebar.css"
import { Router } from 'react-router-dom';
function Sidebar(){
    return(
        <div className="sideMenu">
        <ul>
            <li>
            <Router to="/createProduct">Content A</Router>
            </li>
            <li>
            <Router to="/productlist">Content A</Router>
            </li>
            {/* <li>
            <Link to="/createProduct">Content A</Link>
            </li> */}
        </ul>
    </div>
    )
}

export default Sidebar;