import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header () {
  return (
        
    <header style={{ textAlign: 'center' }}>
        <div className="color-header bg-secondary">
        <h1><p class="text-white bg-dark">FIT WOMEN</p></h1>
            
            
        </div>
    
        <Navbar expand="lg" className="container-fluid bg-primary-subtle">
               
        <div class="container-fluid">
        <Link class="navbar-brand" to="/"><h3>Store</h3></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="#action1">Leggings</Nav.Link>
        <Nav.Link href="#action2">Ofertas</Nav.Link>
        
        <NavDropdown title="Conjuntos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Enterizo</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Dos prendas</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Tres prendas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action7">Todo</NavDropdown.Item>
        </NavDropdown>

        </Nav>

        </Navbar.Collapse>
    </div>
    </Navbar>
    </header>
    );
    }

export default Header;