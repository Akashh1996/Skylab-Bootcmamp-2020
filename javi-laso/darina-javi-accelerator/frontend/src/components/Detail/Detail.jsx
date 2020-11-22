/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './Detail.css';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { requestProjectDetail } from '../../redux/actions/project-actions';
import Tags from '../Tags/Tags';

function Detail({ match, project, dispatch }) {
  const _id = match.params.productId;
  dispatch(requestProjectDetail(_id));

  return (
    <>
      <main className="project-list-container">
        <h2 className="mb-4">Search your job</h2>

        <Card>
          <Card.Header className="project-header">{project.name}</Card.Header>
          <Card.Body className="d-flex flex-column flex-md-row align-items-center">
            {/* <Card.Img variant="left"
                src={project.creator.gitPicture} className="creator-picture mb-3 mb-md-0" /> */}
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

      </main>
    </>
  );
}
function mapStateToProps(state) {
  debugger;
  return {

    project: state.projectsReducer.project,
  };
}
export default connect(mapStateToProps)(Detail);
