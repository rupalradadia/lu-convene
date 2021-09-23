import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return firstName.length>0 && lastName.length>0 &&email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>

        <Form.Group className='lableLG'>
        <Form.Label block size="lg" type="submit" className='lableL'>
            Register
        </Form.Label>
        </Form.Group>

        <Form.Group size="lg" controlId="email" className='lableE'>
          <Form.Label className='lableP'>First Name:</Form.Label>
          <Form.Control
          placeholder="Enter firstname"
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email" className='lableE'>
          <Form.Label className='lableP'>Last Name:</Form.Label>
          <Form.Control
           placeholder="Enter Lastname"
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg"  className='lableE'>
          <Form.Label className='lableP'>Email:</Form.Label>
          <Form.Control
          placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password" className='lableE'>
          <Form.Label className='lableP'>Password:</Form.Label>
          <Form.Control
          placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}