import { Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import TodoCard from "../components/TodoCard";
import TodoContext from "../contexts/TodoContext";

export function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
      <h1 className="my-3"> Your Todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    );
  });
}
