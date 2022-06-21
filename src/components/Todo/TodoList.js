import React from "react";
import { ListGroup,Button } from "react-bootstrap";

export default function TodoList() {
  return (
    <>
      <div>
        <ListGroup>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>adasdasadasdasdas ac</div>
            <div style={{ marginLeft: "5px" }}>
              <Button>Edit</Button>
              <Button style={{ marginLeft: "5px" }}>Delete</Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
