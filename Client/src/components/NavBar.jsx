import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><NavLink className="crud-student" to="/">CRUD-STUDENT</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className='nav-link'
              to="/"
              activeClassName="active"
              style={{ fontWeight: 'bold' }}
            >
              List
            </NavLink>
            <NavLink
              className='nav-link'
              to="/save"
              activeClassName="active"
              style={{ fontWeight: 'bold' }}
            >
              Save
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;