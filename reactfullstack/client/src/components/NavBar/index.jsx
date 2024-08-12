import {Link} from "react-router-dom"

import {Navbar, Container, Tab, Modal, Nav} from "react-bootstrap"
const myNav =()=>{
    return(
        <>
        <Navbar>
            <Container fluid>
                <Navbar.Brand as ={Link} to ="/">
                    The Uncle Five Book Search
                </Navbar.Brand>
                <Navbar.Toggle aria-controls= "navbar"/>
                <Navbar.Collapse id = "navbar" className="d-flex flex-row-reverse">
                    <Nav className="ml-auto d-flex">
                    <Nav.Link as ={Link} to = "/">
                    Search For a Book
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

             
            </Container>
        </Navbar>
        </>
    )
}

export default myNav