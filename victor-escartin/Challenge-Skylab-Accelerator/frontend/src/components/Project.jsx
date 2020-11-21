/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
  const { project } = props;
  return (
    <div key={project._id} className="card">
      <Link to={`/project/${project._id}`}>
        <h2>{project.name}</h2>
      </Link>
      <div className="card-body">
        <h3>Description of project</h3>
        <p>{project.description}</p>
        <p>
          <b>
            GitHub link:
          </b>
          {' '}
          {project.github_url}
        </p>
        <p>
          <b>
            Participants:
          </b>
          {' '}
          {project.participants}
        </p>
        <p>
          <b>
            Creator:
          </b>
          {' '}
          {project.creator}
        </p>
      </div>
    </div>
  );
}
