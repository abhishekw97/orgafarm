import React from 'react'
import {NavLink} from 'react-router-dom';
import './index.css';
import logo from "../src/images/farmer.png"

const Navbar =() =>{
    return(
           <>
                <div className="container nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" to="/"> <img src={logo}  className="img img-fluid logo" alt="logo"/> <b className="bold">O</b>rga<b className="farm">f</b>arm</NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav  mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                
                           </nav>
                           
                        </div>
                    </div>
                </div>
                    <br/><br/>
           </> 
    );
};
export default Navbar;