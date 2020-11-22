/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { loadProject } from '../../redux/actions/projectActions';
import './ProjectDetail.css';

function ProjectDetail({ match, projectDetail, dispatch }) {
  const [projectId] = useState(match.params.projectId);
  const img = 'https://img.icons8.com/ios/100/000000/resume.png';
  const backButton = 'https://img.icons8.com/android/48/000000/circled-left-2.png';
  useEffect(() => {
    if (projectId) {
      dispatch(loadProject(projectId));
    }
  }, []);
  return (
    <main>
      {projectDetail
      && (
        <section>
          <Link to="/">
            <div className="backButton"><img src={backButton} alt="" /></div>

          </Link>
          <div>
            <h1>Project Detail</h1>
          </div>
          <div className="userBox">
            <div className="userImg"><img src={img} alt="" /></div>
            <div>
              <span>
                Project name:
                {' '}
                <br />
                {projectDetail.name}
              </span>
              <span>
                creator:
                {' '}
                <br />
                {projectDetail.creator}
              </span>
            </div>
          </div>
          <div className="description">
            <span>
              Description:
              <br />
              {projectDetail.description}
            </span>
          </div>
          <div className="participants">
            Participants:
            <br />
          </div>
        </section>
      )}
    </main>
  );
}

ProjectDetail.propTypes = {
  projectDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    projectDetail: state.projectReducer,
  };
}

export default connect(mapStateToProps)(ProjectDetail);
