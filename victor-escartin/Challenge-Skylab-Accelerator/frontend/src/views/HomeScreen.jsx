/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Project from '../components/Project';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProjects } from '../redux/actions/projectActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="home-list">
          {projects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
