import React from 'react';
import Form from 'react-bootstrap/Form';
import './NewProjectForm.css';

function NewProjectForm() {
  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label />
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label />
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

export default NewProjectForm;
