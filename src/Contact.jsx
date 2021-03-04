import React,{useState} from 'react'
import con from "../src/images/contact.png"
const Contact =() =>{
    const [data, setData] = useState(
        {
            fullname:'',
            phone:'',
            email:'',
            msg:'',
        }
    )
    const InputEvent = (event) =>{
        const { name ,value } = event.target;

        setData((preVal) => {
           return{ 
            ...preVal,
            [name]:value,
           }
        });
    };
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(
            `My Name is ${data.fullname}.My mobile number is ${data.phone}.
            My email is ${data.email}.My message is ${data.msg}`
        );
    };
    return(
            <>
                <div className="my-5">
                    <h1 className="text-center">Contact US</h1>
                   
                </div>
                <div className="container contact_div">
                    <div className="row">
                         <div className="col-md-6 col-10 mx-auto justify-content-center">
                                    <img src={con} className="img img-fluid" alt="contact"/>
                                    <div className="row">
                                        <div className="col-md-6 col-6">
                                            <a className="btn btn-outline-primary btn-xlg email-btn"  href="mailto:some@email.com" >
                                            <i class="fa fa-envelope-open"></i>  Email
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <a className="btn btn-outline-primary btn-xlg call-btn"  href="tel:7038088021" >
                                            <i class="fa fa-phone-square"></i> Call
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <i class="fa fa-paper-plane"> Location : Risod , Dist Washim Pin-444506</i>
                                       
                                    </div>
                         </div>
                        <div className="col-md-6 col-10 mx-auto mt-3">
                            <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent}  />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent}  />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-primary mb-3">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
    );
};

export default Contact;