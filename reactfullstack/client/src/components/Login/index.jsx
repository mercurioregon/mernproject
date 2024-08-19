import {useState, useEffect} from "react"
import {Form, Button, Alert} from "react-bootstrap"

import { useMutation } from "@apollo/client"
import {USER_LOGIN} from "../../utils/mutations"
import Auth from "../../utils/auth"

const Login = () => {
    const [logInData, setLogInData]=useState({email:"", password:""})
    const [tryToLogin, {error}]=useMutation(USER_LOGIN)

    const handleFormSubmit=async (e)=>{
       e.preventDefault()
       const formdata= e.currentTarget

       if(formdata.checkValidity()){
        e.preventDefault()
        e.stopPropogation()
       }
       try{
        const {data} = await tryToLogin({
            variables:{...formData}
        })
        Auth.setToken(data.login.token)

    }catch(e){
        console.log(e)
    }
     
    const handleInputChange = (e)=> {
        const {name,value} =e.target
        setLogInData({...logInData, [name]:value})
    }

    return (
        <>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                type="text"
                placeholder="youremail"
                name="email"
                onChange={handleInputChange}
                    value={logInData.email}
                    required

                                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">Correct Email Format Required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="pass">Password</Form.Label>
                <Form.Control
                type="text"
                placeholder="yourpass"
                name="password"
                onChange={handleInputChange}
                    value={logInData.password}
                    required

                                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">Password Required</Form.Control.Feedback>
            </Form.Group>
            <Button
            disabled= {!(logInData.email && logInData.password)}
            type="submit"
            variant="success"
            >
            Submit
            </Button>
        </Form>
        </>
        )
    }
   }
export default Login