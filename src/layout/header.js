import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css';
import React from 'react';

function Header () {
  return (
            <Navbar expand="lg" className="color-header">   
                  <Container fluid>  
                        
                        <div class=" row"></div>
                              <div class=" col-2 centrar">
                              <Navbar.Brand href="/"><img hrf="/" className="logomujer" src='https://i.pinimg.com/236x/8e/66/8a/8e668aa1b7a6523b91a4fbbbd57c2fdc.jpg'></img></Navbar.Brand>
                              <Navbar.Brand href="/"><div className='negrita nombre'></div>WOMEN'S StoreFit</Navbar.Brand>          
                              </div>
                              
                              <div class=" col-2"></div>
                              <div class=" col-7">
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                          <Navbar.Collapse id="navbarScroll">           

                                          <div class="col-2">
                                                <button className="botonbarra centrar">
                                                      <Nav.Link  href="#action4" className="nombre">Tendencia</Nav.Link>
                                                </button>
                                          </div>
                                          <div class="col-2">
                                                <button className="botonbarra centrar">
                                                      <Nav.Link  href="#action0"className="nombre">Nuevo</Nav.Link>
                                                </button>
                                          </div>
                                          <div class="col-2">
                                                <button className="botonbarra centrar">
                                                      <Nav.Link  href="#action1"className="nombre">Leggings</Nav.Link>
                                                </button>    
                                          </div>
                                          <div class="col-2">
                                                <button className="botonbarra centrar">
                                                      <Nav.Link  href="#action2"className="nombre">Ofertas</Nav.Link>
                                                </button>
                                          </div>
                                          <div class="col-3">                        
                                                <button className="botonbarra centrar">     
                                                      <NavDropdown className="nombre" title="Conjuntos" id="navbarScrollingDropdown">
                                                      <NavDropdown.Item href="#action3" >Enterizo</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action5">Dos prendas</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action6">Tres prendas</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action7">Todo</NavDropdown.Item>
                                                      </NavDropdown>
                                                </button>
                                          </div>
                                    
                                          </Navbar.Collapse>
                              </div>
                              <div class=" col-1"><Navbar.Brand href="/"><img hrf="/" className="logomujer" src='https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png'></img></Navbar.Brand></div>
    
                        
                  </Container>
                  
            </Navbar>
   
   
    
    
    );
    }

export default Header;