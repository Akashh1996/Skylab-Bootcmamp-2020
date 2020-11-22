/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewProjectForm.css';
import { createProject } from '../../redux/actions/project-actions';

function NewProjectForm({ dispatch }) {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [urlGit, setUrlGit] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (

    <>
      <main>
        <section className="newProject__section">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label />
              <Form.Control type="title" placeholder="name" onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label />
              <Form.Control type="categories" placeholder="categories" onChange={(event) => setCategories(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label />
              <Form.Control type="github-url" placeholder="URL github" onChange={(event) => setUrlGit(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput5">
              <Form.Label />
              <Form.Control type="price" placeholder="Price" onChange={(event) => setPrice(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(event) => setDescription(event.target.value)} />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(createProject(
                {
                  name,
                  categories,
                  urlGit,
                  price,
                  description,
                },
              ))}
            >
              Create
            </Button>
          </Form>
        </section>
      </main>
    </>
  );
}

export default NewProjectForm;
