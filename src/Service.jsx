import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import apple from "./images/icon9.png"
const Service =() =>{
    return(
            <>
                 <div className="my-5">
                     <h1 className="text-center">
                            Our Service
                     </h1>
                     <br/>
                     <center><img src={apple} alt="apple" className="img"/></center>
                     <h2 className="text-center">Amazing Health Solution Whatever Your Needs</h2>
                 </div>
                 <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val)=>{
                                            return <Card imgsrc={val.imgsrc}
                                                          title={val.title}
                                                          description={val.description}/>
                                    })
                                }
                            </div>
                         </div>
                     </div>
                 </div>           
            </>
    );
};

export default Service;