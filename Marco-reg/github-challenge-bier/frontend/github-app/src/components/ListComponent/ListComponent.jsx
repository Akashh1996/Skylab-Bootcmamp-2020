/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import { requestList, deleteProject } from '../../redux/actions/listActions';
import './ListComponent.css';

function List({ list, dispatch }) {
  useEffect(() => {
    dispatch(requestList());
  }, []);

  return (
    <>

      <section className="list_wrapper">

        {list
                && list.length >= 0
                && (
                <>
                  {list.map((projects) => (
                    <div className="project_wrapper" id="project_wrapper">
                      <Link to={`/detail/${projects._id}`}>
                        <h3 className="project_title">{projects.projectName}</h3>
                      </Link>
                      <p className="project_info">{projects.projectInfo}</p>
                      <p className="project_technology">{projects.technology.map((tech) => <p className="technology">{tech}</p>)}</p>

                      <img className="project_img" src={projects.photo?.length === 0 ? 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' : projects.photo} />
                      <button id="delete-project" type="submit" onClick={() => (dispatch(deleteProject({ projects })))}>DELETE</button>

                    </div>
                  ))}

                </>
                )}

      </section>

    </>

  );
}
function mapStateToProps(state) {
  return {
    list: state.listReducers.list,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
