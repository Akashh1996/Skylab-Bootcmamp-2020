import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
  const { project } = props;
  return (
    <div key={project._id} className="card">
      <Link to={`/project/${project._id}`}>
        <h2>NAME OF PROJECT</h2>
      </Link>
      <div className="card-body">
        <Link to={`/project/${project._id}`}>
          <h3>Description of project</h3>
        </Link>
      </div>
      <div>
        DESCRIPTION : XXXXXXXXXXXXXX
      </div>
    </div>
  );
}
