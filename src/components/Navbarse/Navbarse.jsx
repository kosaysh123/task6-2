
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from "../Navbarse/logoes.PNG"
import { Link } from 'react-router-dom';

function Navbarse() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand className='h11'>PHONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link to='/' as={Link} className="links">Home</Nav.Link>
            <Nav.Link to='/h2' as={Link} href="#features">Shop</Nav.Link>
            <Nav.Link href="#Android">Android</Nav.Link>
            <Nav.Link href="#Accsesoris">Accsesoris</Nav.Link>
            <Nav.Link href="#Memory & Storge">Memory & Storge</Nav.Link>
            <NavDropdown title="pages" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">pages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarse;