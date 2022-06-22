import React, { useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export default function Dash() {

  const [updatedTodoTitle,setupdatedTodoTitle] = useState("")

  const [tempTodo, setTempTodo] = useState([{}])

  const [todoList, setTodoList] = useState([
    { id: "9bc8d3b6-1d2d-48a1-a8dc-da855b28362c", title: "Default Todo#1" },
    { id: "da776640-4fc7-4e18-a0d1-d0c0b8e5a630", title: "Fake Todo#2" },
    { id: "7ae0d3f6-1565-48c3-b89d-b5fe43174a69", title: "Different Todo#3" },
  ]);

  const [query,setquery] = useState("");
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setupdatedTodoTitle(e.target.value)
    setTempTodo({ id: uuidv4(), title: e.target.value })
  };

  function removeTodo(id) {
    const newtodoList = todoList.filter(element => element.id !== id);
    setTodoList(newtodoList);

  }

  function addTodo(tempTodo) {
    setTodoList([...todoList, tempTodo])
    setTempTodo("")
    setupdatedTodoTitle("")
  }

  function updateTodo(id) {
    console.log("");
    const updatedState = todoList.map(obj => {
      
      if (obj.id === id) {
        return {...obj, title: updatedTodoTitle};
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    setupdatedTodoTitle("")
    setTodoList(updatedState);
  }

 
  

  useEffect(() => {}, [todoList]);

  return (
    <>
      <div> {/*search area*/}
        <Form onSubmit={handleOnSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search" onChange={(e)=>setquery(e.target.value)} />
              </Form.Group>
            </div>
          </div>
        </Form>
      </div>
      <div> {/*input area*/}
        <Form onSubmit={handleOnSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter todo" value={updatedTodoTitle} onChange={(e) => handleInput(e)} />
              </Form.Group>
            </div>
            <div>
              <Button variant="primary" type="submit" onClick={() => addTodo(tempTodo)}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div> {/*todo listing area*/}
        <ListGroup>
          {todoList.filter(todo=>todo.title.includes(query)).map((todo,index) => (
            <ListGroup.Item
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>{todo.title}</div>
              <div style={{ marginLeft: "5px" }}>
                <Button onClick={() => updateTodo(todo.id)}>Edit</Button>
                <Button
                  style={{ marginLeft: "5px" }}
                  onClick={() => removeTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
