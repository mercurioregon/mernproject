import {Link} from "react-router-dom"

import {Navbar, Container, Tab, Modal, Nav} from "react-bootstrap"
import Auth from "../../utils/auth"
import {useState} from "react"

const myNav =()=>{
    const [showModal, setShowModal]= useState(false)
    return(
        <>
        <Navbar bg= "light" expand= "lg">
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
                    {Auth.isLoggedIn() ?(
                    <>
                    <Nav.Link as ={Link} to ="./savedBooks">
                    </Nav.Link>
                        <Nav.Link onClick={Auth.removeToken}>
                    </Nav.Link>   
                    <Nav.Link>Logout</Nav.Link>
                    </> 
                    ):(
                        <>
                    <Nav.Link onClick={()=>{
                        setShowModal(true)
                    }}>
                        Login / SignUp
                    </Nav.Link>
                        </>
                    )
                      }
                  
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal
            size="lg"
            show={showModal}
            onHide= {()=>{setShowModal(false)} }
                aria-labeledBy= "signup">
                    <Tab.Container>
                        <Modal.Header closeButton>
                      <Modal.Title id="signup">
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey= "login">Login
                                </Nav.Link>
                                <Nav.Item>
                                    <Nav.Link eventKey="signup">
                                        Sign Up
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav.Item>
                        </Nav>
                      </Modal.Title>
                        </Modal.Header>
                    </Tab.Container>
        </Modal>
    </>
    )
}

export default myNav