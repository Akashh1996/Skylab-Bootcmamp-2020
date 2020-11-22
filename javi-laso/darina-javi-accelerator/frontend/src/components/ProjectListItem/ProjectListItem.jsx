import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { requestProjects } from '../../redux/actions/project-actions';
import Tags from '../Tags/Tags';
import './ProjectListItem.css';

function ProjectListItem({ projects, dispatch }) {
  if (!projects || !projects.length) {
    dispatch(requestProjects());
  }
  return (
    <>
      <main className="project-list-container">
        <h2 className="mb-4 item-title">Search your job</h2>
        <ul className="project-list">
          {projects && projects.length > 0 && projects.map((project) => (

            <li key={performance.now() * Math.random()} className="project-link">
              <Card as={Link} to={`/projects/${project._id}`}>
                <Card.Header className="project-header">{project.name}</Card.Header>
                <Card.Body className="d-flex flex-column flex-md-row align-items-center">
                  <Card.Img
                    variant="left"
                    src={project.creator ? project.creator.gitPicture : 'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg'}
                    className="creator-picture mb-3 mb-md-0"
                  />
                  <div className="d-flex flex-column">
                    <Tags project={project} />
                    <Card.Text>
                      {
                    project.description.length > 310
                      ? `${project.description.slice(0, 310)}...`
                      : project.description
                  }
                    </Card.Text>
                    <div className="price-separator">
                      <Card.Text className="project-price">{`${project.price}€`}</Card.Text>
                      <Card.Text className="collaborators">{`Actual collaborators: ${project.participants.length}`}</Card.Text>
                    </div>
                  </div>

                  {' '}
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

ProjectListItem.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

ProjectListItem.defaultProps = {
  projects: [],
};

function mapStateToProps(state) {
  return {
    projects: state.projectsReducer.projects,
  };
}

export default connect(mapStateToProps)(ProjectListItem);
