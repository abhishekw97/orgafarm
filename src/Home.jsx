import React from 'react'
import Common from './Common';
import web from "../src/images/bg3.png"
import lady from "../src/images/lady.png"
import crop from "./images/crop.jpeg"
const Home =() =>{
    return(
            <>
            <Common 
                 name='100% Natural Organic Orgafarm  Products'
                 imgsrc={web} 
                 desc=" Orgafarm have Organic Store in which we sell Organic Vegetables, Fruits,
                 Dairy Products, Dals, Cereals  and many other organic products."
                 visit="/service" 
                 btnname="Shop Now" 
                />
                <section className="d-flex align-items-center" id="header">
                    <div className="container-fluid nav-bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                    
                                    <div className="row">
                                         <div className="col-md-3 col-7 header-img">
                                                <img  src={crop} alt="" className="img-fluid " />
                                        </div> 
                                        <div className="col-md-3 col-3 header-img">
                                                <img  src={lady} alt="" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6 " >

                                            <h1>
                                            <b>Welcome to our  <strong className="brand-name">Orgafarm</strong> Farm</b>
                                            </h1>
                                            <h5 className="my-3">
                                                
                                            Orgafarm farmers does not use fertilizers, insecticides, pesticides, or herbicides to manage their crops.
                                            Since organic farmers do not use these harmful chemicals there is no runoff of these pollutants into the water supply.
                                            </h5> 
                                            
                                        </div>

                                             
                                    </div>        
                            </div>
                        </div>
                    </div>
                </section> 
            </>
    );
};

export default Home;