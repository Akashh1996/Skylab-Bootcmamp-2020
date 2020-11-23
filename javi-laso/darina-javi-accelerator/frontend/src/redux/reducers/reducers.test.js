import userReducer from './userReducer';
import projectsReducer from './projectReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  describe('userReducer', () => {
    test('should return the initial state without action', () => {
      const result = userReducer(undefined, {});
      expect(result).toEqual({});
    });

    test('should add the user to the state', () => {
      const loadUserAction = {
        type: actionTypes.LOAD_USER,
        user: 'new user',
      };

      const result = userReducer(initialState, loadUserAction);
      expect(result).toEqual({ user: 'new user', isLogged: true });
    });

    test('should add the errorUser to the state', () => {
      const loadUserErrorAction = {
        type: actionTypes.LOAD_USER_ERROR,
        userError: 'new error',
      };

      const result = userReducer(initialState, loadUserErrorAction);
      expect(result).toEqual({ errorUser: 'new error' });
    });

    test('should put the user null and isLogged to false', () => {
      const logoutUser = {
        type: actionTypes.USER_LOGOUT,
      };

      const result = userReducer(initialState, logoutUser);
      expect(result).toEqual({ user: null, isLogged: false });
    });
  });

  describe('projectReducer', () => {
    test('should return the initial state without action', () => {
      const result = projectsReducer(undefined, {});
      expect(result).toEqual({});
    });

    test('should add the prjects to the state', () => {
      const loadProjectsAction = {
        type: actionTypes.LOAD_PROJECTS,
        projects: 'new project',
      };

      const result = projectsReducer(initialState, loadProjectsAction);
      expect(result).toEqual({ projects: 'new project' });
    });

    test('should add the project to the state', () => {
      const loadProjectAction = {
        type: actionTypes.LOAD_PROJECT,
        project: 'new project',
      };

      const result = projectsReducer(initialState, loadProjectAction);
      expect(result).toEqual({ project: 'new project' });
    });

    test('should add the projectError to the state', () => {
      const loadProjectErrorAction = {
        type: actionTypes.LOAD_PROJECT_ERROR,
        projectsError: 'new error',
      };

      const result = projectsReducer(initialState, loadProjectErrorAction);
      expect(result).toEqual({ errorProject: 'new error' });
    });

    test('should add the projectsError to the state', () => {
      const loadProjectsErrorAction = {
        type: actionTypes.LOAD_PROJECTS_ERROR,
        projectsError: 'new error',
      };

      const result = projectsReducer(initialState, loadProjectsErrorAction);
      expect(result).toEqual({ errorProject: 'new error' });
    });

    test('should add the newProject to the projects array', () => {
      initialState = { projects: [] };

      const createProjectAction = {
        type: actionTypes.CREATE_PROJECT,
        newProject: 'new project',
      };

      const result = projectsReducer(initialState, createProjectAction);
      expect(result).toEqual({ projects: ['new project'] });
    });
  });
});
