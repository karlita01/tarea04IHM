import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
const feather = require('feather-icons');
setTimeout( () => {
    feather.replace(); 
},500);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <h1 className='text-center text-light bg-secondary bg-gradient0'>  STORE KARLITA </h1>
        <Header></Header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                
                <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);