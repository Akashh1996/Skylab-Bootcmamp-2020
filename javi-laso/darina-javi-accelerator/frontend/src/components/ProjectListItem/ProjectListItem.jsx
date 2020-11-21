import React from 'react';
import './ProjectListItem.css';
import requestProjects from '../../redux/actions/project-actions';

function ProjectListItem(projects, dispatch) {
  if (!projects && !projects.length) {
    dispatch(requestProjects);
  }
  return (
    <>
      <h1>ProjectListItem</h1>

    </>
  );
}

export default ProjectListItem;
