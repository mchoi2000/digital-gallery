import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { NavbarContainer } from './styles';

export const NavigationBar = () => (
  <NavbarContainer>
    <Navbar expand="sm">
      <Navbar.Brand href="/">MC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Charts</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavbarContainer >
)