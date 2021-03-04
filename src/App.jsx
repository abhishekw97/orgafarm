import React from 'react';
import {Switch,Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Home';
import Contact from  './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

const App =() =>{
    return(
            <>
                    <Navbar/>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/contact" component={Contact} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer/>
            </>
    );
};
export default App;