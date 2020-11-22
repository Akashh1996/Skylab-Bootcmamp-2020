/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProject } from '../redux/actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../styles/ProjectScreen.css';

export default function ProjectScreen(props) {
  const dispatch = useDispatch();
  const projectId = props.match.params.id;
  const projectDetails = useSelector((state) => state.projectDetails);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, project } = projectDetails;
  useEffect(() => {
    dispatch(detailsProject(projectId));
  }, [dispatch, projectId]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Link to="/">Back to result</Link>
          <div className="project-item">
            <div className="project-description">
             <h2>{project.name}</h2>
              <div className="card-body">
                  <h3>{project.description}</h3>
                <p>PROJECT.DESCRIPTION</p>
                <p>
                  <b>
                    GitHub link:
                  </b>
                  {' '}
                  GITHUBLINK
                </p>
                <p>
                  <b>
                    Participants:
                  </b>
                  {' '}
                  PARTICIPANTS
                </p>
                <p>
                  <b>
                    Creator:
                  </b>
                  {' '}
                  CREATOR
                </p>
              </div>
            </div>
            <div className="project-btns">
              <button type="button" className="project-btn">JOIN</button>
              <button type="button" className="project-btn">UPDATE</button>
              <button type="button" className="project-btn">DELETE</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
