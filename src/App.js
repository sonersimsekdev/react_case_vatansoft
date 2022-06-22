import Dash from "./components/Dash";
import Login from "./components/Login";
import { Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./App.css";
import accounts from "./account.json";

/*
accounts.accounts.map((account,index)=>{
  console.log(index+" "+account.name+"  "+account.password)
})*/


export default function App() {

  const [auth,setAuth] = useState(false)

  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const {uname, pass} = data;    

 
  const checkUser = () => {
    const usercheck = accounts.accounts.find(user => (accounts.accounts.username === uname && accounts.accounts.password === pass));
    if(usercheck) {
      console.log("Login successful");
      setAuth(true)
    }else {
      console.log("Wrong password or username");
      setAuth(false)
    }
    // console.log(uname);
    console.log(usercheck);
  }

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:[e.target.value]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
    console.log(checkUser());
  }


  return (
    <div className="app">
      {auth == true ? <Dash/> : <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                required
                value={uname}
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
                value={pass}
                onChange={changeHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => checkUser()}>
              Submit
            </Button>
          </Form>
        </div>}     
    </div>
  );
}
