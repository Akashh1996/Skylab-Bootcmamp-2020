import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NewProjectForm.css';
import { createProject } from '../../redux/actions/project-actions';

function NewProjectForm({ dispatch, user }) {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [urlGit, setUrlGit] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (

    <>
      <main>
        <section className="newProject__section">
          <h1>Create new project</h1>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Title of the project" onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Categories</Form.Label>
              <Form.Control type="categories" placeholder="Entry categories sepparated by commas" onChange={(event) => setCategories(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Repository url</Form.Label>
              <Form.Control type="github-url" placeholder="Github repository url" onChange={(event) => setUrlGit(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput5">
              <Form.Label>Price</Form.Label>
              <Form.Control type="price" placeholder="Price/hour (in euros)" onChange={(event) => setPrice(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(event) => setDescription(event.target.value)} />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              onClick={() => {
                dispatch(createProject(
                  {
                    name,
                    categories,
                    urlGit,
                    price,
                    description,
                    creator: user._id,
                  },
                ));
              }}
              as={Link}
              to={{ pathname: '/' }}
            >
              Create
            </Button>
          </Form>
        </section>
      </main>
    </>
  );
}

NewProjectForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    projects: state.projectsReducer.projects,
    user: state.usersReducer.user,
  };
}

export default connect(mapStateToProps)(NewProjectForm);
