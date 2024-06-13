// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
//import Sidebar from './Sidebar/Sidebar';
import NavbarNav from './navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import createProduct from './ProductManagement/Createproduct';
//import { Routes, Route, BrowserRouter } from "react-router-dom"
import listProduct from './ProductManagement/Listallproduct';
function App() {
  return (
    
    <div className="App">
      <NavbarNav/>
      
     
    </div>
  );
}

export default App;
