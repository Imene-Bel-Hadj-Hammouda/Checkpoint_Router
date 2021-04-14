import React from 'react'
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
function Nav_bar({search,setSearch}) {
    const handleChange =(e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div >
       
  <Navbar className="nav" style={{width:"100%"}}    bg="dark" variant="dark">
    <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">New movies</Nav.Link>
      <Nav.Link href="#pricing">Actors</Nav.Link>
      <Nav.Link href="#pricing">Sign In</Nav.Link>
      <Nav.Link href="#pricing">Log In</Nav.Link>
    </Nav>
     <Form inline>
      <FormControl type="text" placeholder="Type of Movie" className="mr-sm-2" onChange={handleChange} />
      <Button variant="outline-info">Search</Button>
    </Form> 
  </Navbar>
 
        </div>
    )
}

export default Nav_bar
