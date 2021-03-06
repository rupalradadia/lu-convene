import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

//lib
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>

      <Form.Group className='lableLG'>
        <Form.Label block size="lg" type="submit" className='lableL'>
            Login
        </Form.Label>
    </Form.Group>

        <Form.Group size="lg" controlId="email" className='lableE'>
          <Form.Label className='lableP'>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className='lableE'>
          <Form.Label className='lableP'>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>

        <Form.Group className='lableFPG'>
        <Form.Label block size="lg" type="submit" className='lableFP'>
          Forgot Password
        </Form.Label>
       
        <Form.Label block size="lg" type="submit" className='lableFP'>
          Register
        </Form.Label>
        </Form.Group>

      </Form>

    
<GoogleLogin

  clientId="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
/>
    </div>
  );
}