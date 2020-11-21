/* eslint-disable react/prop-types */
import React from 'react';
import './ProjectListItem.css';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { requestProjects } from '../../redux/actions/project-actions';

function ProjectListItem({ projects, dispatch }) {
  if (!projects || !projects.length) {
    dispatch(requestProjects());
  }
  return (
    <>
      <main className="project-list-container">

        <ul>
          {projects && projects.length > 0 && projects.map((project) => (

            <li key={project._id}>
              {' '}
              <Card>
                <Card.Header>
                  Name:
                  {project.name}
                </Card.Header>
                <Card.Body>
                  Description:
                  {' '}
                  {project.description}
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  return {
    projects: state.projectsReducer.projects,
  };
}

export default connect(mapStateToProps)(ProjectListItem);
