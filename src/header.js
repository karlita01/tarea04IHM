import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
        <Navbar.Brand href="#"><i data-feather="globe"/> Nosotros</Navbar.Brand>
        <Navbar.Toggle aria-controls="nosotros" />
        <Navbar.Collapse id="nosotros">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Conjuntos</Nav.Link>
            <Nav.Link href="#action2">Legging</Nav.Link>
            <Nav.Link href="#action3" >Ofertas</Nav.Link>
            <NavDropdown title="Conjuntos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Enterizo</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Dos prendas</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Tres prendas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Todo</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
          
          <i data-feather="search"/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search" 
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;