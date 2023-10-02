import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    //NavBar from bootstrap
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">My Book App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br></br>
    </>
  );
}

export default MyNavBar;