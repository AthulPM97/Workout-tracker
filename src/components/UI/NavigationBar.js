import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Workout Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Muscle group">
              <NavDropdown.Item href="/push-day">Push day</NavDropdown.Item>
              <NavDropdown.Item href="/pull-day">Pull day</NavDropdown.Item>
              <NavDropdown.Item href="/leg-day">Leg day</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
