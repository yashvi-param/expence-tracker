import React, { useState, useContext } from "react";
import { localbox } from "./LocalContainer";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const LocalForm = () => {
  const { add } = useContext(localbox);

  const [input, setInput] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
  });

  const handleInput = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(input);
    setInput({ title: "", amount: "", type: "", category: "" });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="expense-card">
            <Card.Body>
              <h3 className="text-center mb-4 text-success">
                Expenses Tracker
              </h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={input.title}
                    onChange={(e) => handleInput("title", e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={input.amount}
                    onChange={(e) => handleInput("amount", e)}
                  />
                </Form.Group>

                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Credit"
                    type="radio"
                    name="type"
                    value="credit"
                    checked={input.type === "credit"}
                    onChange={(e) => handleInput("type", e)}
                  />
                  <Form.Check
                    inline
                    label="Debit"
                    type="radio"
                    name="type"
                    value="debit"
                    checked={input.type === "debit"}
                    onChange={(e) => handleInput("type", e)}
                  />
                </div>

                <Form.Group className="mb-4">
                  <Form.Select
                    value={input.category}
                    onChange={(e) => handleInput("category", e)}
                  >
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Add Expense
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LocalForm;
