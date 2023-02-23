import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  const [title, setTitle] = useState("Muscle group");

  const dropDownTitleHandler = (day) => {
    console.log(day);
    if(day === 'push') {
      setTitle('Push day');
    }
    if(day === 'pull') {
      setTitle('Pull day');
    }
    if(day === 'legs') {
      setTitle('Leg day');
    }
  }

  return (
    <Navbar bg="light" style={{border:'1px solid black'}}>
      <Container>
        <Navbar.Brand href="/">Workout Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title={title}>
              <NavDropdown.Item href="/push-day" onClick={dropDownTitleHandler.bind(null, 'push')}>Push day</NavDropdown.Item>
              <NavDropdown.Item href="/pull-day" onClick={dropDownTitleHandler.bind(null, 'pull')}>Pull day</NavDropdown.Item>
              <NavDropdown.Item href="/leg-day" onClick={dropDownTitleHandler.bind(null, 'legs')}>Leg day</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
