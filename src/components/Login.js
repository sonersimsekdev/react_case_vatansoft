import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import accounts from "..//account.json"
import Dash from "./Dash";
//console.log(accounts.accounts)
 
export default function Login() {
  const [data, setData] = useState({
    name: '',
    password: ''
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setData({name:e.target.value,password:e.target.name.value})
  }

   function checkUser () {
    const usercheck = accounts.accounts.find(account => (account.username === data.name && account.password === data.password));
    console.log(data)
    if(usercheck) {
      <Dash/>
      debugger
    }else {
      console.log("red")
    }
    // console.log(uname);
    //console.log(usercheck);
  }


  useEffect(() => {
checkUser(accounts.accounts)
  }, [data.name, data.password])
  return (
    <>
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" 
          placeholder="Username"  
          
          required
          onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          name="password"
          required
          onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={()=>checkUser()}>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
}
