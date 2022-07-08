import React from "react";

function NavbarContainer() {
  return (
    <>
      <div className="nav-bar">
        <h1><a href="/">BetFlix</a></h1>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/favourite">Favourite</a></li>
            </ul>
        </nav>
      </div>
    </>
  );
}

export default NavbarContainer;

{
  /* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Favourite</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */
}
