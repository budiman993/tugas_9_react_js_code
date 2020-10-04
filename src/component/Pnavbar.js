import React from 'react'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
} from 'react-bootstrap';

function Pnavbar(){
    return(
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Berita">Berita</Nav.Link>
      <Nav.Link href="#LiveScore">Live Score</Nav.Link>
      <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Liga Primer Inggris</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Seria A</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Divisi Primera</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">bundesLiga</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.5">Liga 1 Indonesia</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#TransferPemain">Transfer Pemain</Nav.Link>
      <Nav.Link href="#Tim">Tim</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

    )
}

export default Pnavbar;