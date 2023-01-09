import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
//import '../../../node_modules/font-awesome/css/font-awesome.css'; 
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './LeftBar.css'


function LeftBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>


      
      <Button  onClick={handleShow} id="menu" style={{ backgroundColor: "#F0F0F0", border:"none"}}>
      <i className="fa-solid fa-bars" style={{color: "black"}}></i>
      
      
     
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src="/img/logo.png" className='imglog' /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        <BrowserRouter>
      <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link>

    </BrowserRouter>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}




export default LeftBar