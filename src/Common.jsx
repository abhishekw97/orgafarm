import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'


const Common =(props) =>{
    return(
            <>
            <section className="d-flex align-items-center" id="header">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                                  
                                  <div className="row">
                                    <div className="col-md-6 pt5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >

                                        <h1>
                                           <b>{props.name}</b>  <strong className="brand-name">Orgafarm</strong>
                                        </h1>
                                        <h5 className="my-3">
                                            
                                        {props.desc}
                                        </h5> 
                                        <div className="mt-3">
                                            <NavLink to={props.visit} className="btn  btn-service">{props.btnname}</NavLink>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 oreder-1 order-lg-2 header-img">
                                            <img  src={props.imgsrc} alt="" className="img-fluid animated" />
                                    </div>      
                                </div>        
                        </div>
                    </div>
                </div>
            </section> 
            
            </>
    );
};

export default Common;