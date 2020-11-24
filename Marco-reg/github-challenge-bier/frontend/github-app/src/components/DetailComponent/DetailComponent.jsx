/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestProjectDetail } from '../../redux/actions/listActions';
import './DetailComponent.css';

function ProjectDetail({
  match, projectDetail, dispatch, actions,
}) {
  debugger;
  const [id] = useState(match.params.id);
  useEffect(() => {
    if (id) {
      dispatch(requestProjectDetail(id));
    }
  }, [id, dispatch, actions]);

  return (
    <>
      {projectDetail
                && (
                <div className="detail-wrapper">
                  <h2 className="project_title">{projectDetail.projectName}</h2>
                  <ul>
                    <li className="project_info">{projectDetail.projectInfo}</li>
                    <li>
                      Project owner:
                      {' '}
                      {projectDetail.projectOwner}
                    </li>
                  </ul>
                  <img className="project_img" src={`${projectDetail.photo}`} alt="" />
                  <button type="button" id="back-btn"><Link to="/">back</Link></button>
                </div>
                )}
    </>
  );
}
function mapStateToProps(state) {
  return {
    projectDetail: state.listReducers.projectDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
