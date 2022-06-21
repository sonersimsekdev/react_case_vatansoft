import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import accounts from "..//account.json"
//console.log(accounts.accounts)
/* accounts.accounts.map((account,index)=>{
  console.log(index+" "+account.name+"  "+account.password)
}) */
export default function Login() {
  const [data, setData] = useState({
    name: '',
    password: ''
  });

  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const checkUser = () => {
    const usercheck = accounts.accounts.find(account => (account.name === data.name && account.password === data.password));
    if(usercheck) {
      console.log("Login successful");
    }else {
      console.log("Wrong password or username");
    }
    // console.log(uname);
    console.log(usercheck);
  }


  useEffect(() => {
checkUser(accounts.accounts)
  }, [data.username, data.password])
  return (
    <>
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" 
          placeholder="Username"  
          value={data.name}
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
          value={data.password}
          required
          onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
}
