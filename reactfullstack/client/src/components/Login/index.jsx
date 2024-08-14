import {useState, useEffect} from "react"
import {Form, Button, Alert} from "react-bootstrap"

import { useMutation } from "@apollo/client"

import Auth from "../../utils/auth"
const handleFormSubmit=()=>{

}
 
const handleInputChange = ()=> {
    
}
const Login = () => {
    const [logInData, setLogInData]=useState({email:"", password})

    return (
        <>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                type="text"
                placeholder="youremail"
                name="email"
                onChange={handleInputChange}>
                                    </Form.Control>

            </Form.Group>
        </Form>
        </>
    )
}