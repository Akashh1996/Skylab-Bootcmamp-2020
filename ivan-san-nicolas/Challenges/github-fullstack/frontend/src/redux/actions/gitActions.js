/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

function loadProjectsSuccess(projectList) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projectList,
  };
}

function loadProjectSuccess(projectItem) {
  return {
    type: actionTypes.LOAD_PROJECT,
    projectItem,
  };
}

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

function loadUsersSuccess(usersList) {
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

export function loadProjects() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/projects/';
    try {
      const { data } = await axios.get(endpoint);
      dispatch(loadProjectsSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function loadProject(projectId) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      const { data } = await axios.get(endpoint, { projectId });
      dispatch(loadProjectSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/users';
    try {
      const { data } = await axios.get(endpoint);
      dispatch(loadUsersSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function updateProject(projectId, updatedProject) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      await axios.patch(endpoint, {
        projectId,
        updatedProject,
      });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function addProject(name, description, url, participants, creator) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      await axios.post(endpoint, {
        name, description, url, participants, creator,
      });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function addUserToParticipants(
  newParticipant, actualProject, actualProjects, projectButton, dispatch,
) {
  const updatedProject = { ...actualProject };
  const updatedProjects = [...actualProjects];
  const subscribeButton = document.getElementById(projectButton.id);

  let wasParticipant = false;

  actualProject.participants.forEach((participant) => {
    if (participant._id === newParticipant._id) {
      updatedProject.participants = actualProject.participants.filter(
        (filterParticipant) => filterParticipant._id !== newParticipant._id,
      );
      wasParticipant = true;
    }
  });

  if (!wasParticipant) {
    updatedProject.participants.push(newParticipant._id);
    subscribeButton.style.backgroundColor = 'red';
    subscribeButton.textContent = 'Unsubscribe';
  } else {
    subscribeButton.style.backgroundColor = 'rgb(136, 202, 38)';
    subscribeButton.textContent = 'Subscribe';
  }

  updatedProjects.forEach((project) => {
    if (project._id === updatedProject._id) {
      project = updatedProject;
    }
  });

  dispatch(updateProject(actualProject._id, updatedProject));
  dispatch(loadProjects());
}
