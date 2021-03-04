import React from 'react';
import Common from './Common';
import web from "../src/images/farmer.png"
const About =() =>{
    return(
            <>
            
            <div className="my-4">
                     <h1 className="text-center">
                            About us
                     </h1> 
            </div> 
            <Common     
                name='The Best Trusted Farms For You   '
                imgsrc={web} 
                desc="We are group of farmers , all we together do group farming it cost effective and easy to manage.
                        "
                visit="/contact" 
                btnname="Contact Now" 
               />
          
              
            </>
    );
};

export default About;