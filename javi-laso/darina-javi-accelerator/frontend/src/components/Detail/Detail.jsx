import React, { useEffect } from 'react';
import './Detail.css';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tags from '../Tags/Tags';
import { requestProjectDetail } from '../../redux/actions/project-actions';

function Detail({ project, match, dispatch }) {
  const { projectId } = match.params;

  useEffect(() => {
    if (!project || projectId !== project._id) {
      dispatch(requestProjectDetail(projectId));
    }
  }, [project, projectId]);
  return (
    <>
      {project

    && (
    <main className="project-list-container">
      <h2 className="mb-4">Search your job</h2>

      <Card>
        <Card.Header className="project-header">{project?.name}</Card.Header>
        <Card.Body className="d-flex flex-column flex-md-row align-items-center">

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
              <Card.Text className="project-price">{`${project?.price}€`}</Card.Text>
              <Card.Text className="collaborators">{`Actual collaborators: ${project.participants.length}`}</Card.Text>
            </div>

          </div>

          {' '}
        </Card.Body>
      </Card>

    </main>
    )}
      {!project && <h1>Loading....</h1> }
    </>
  );
}

Detail.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object),
    _id: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

Detail.defaultProps = {
  project: null,
};

function mapStateToProps(state) {
  return {
    project: state.projectsReducer.project,
  };
}

export default connect(mapStateToProps)(Detail);
