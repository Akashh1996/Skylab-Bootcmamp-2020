/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProject,
  deleteProject,
  listProjects,
} from '../redux/actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  PROJECT_CREATE_RESET,
  PROJECT_DELETE_RESET,
} from '../redux/constants/projectConstants';

export default function ProjectListScreen(props) {
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, products } = projectList;

  const projectCreate = useSelector((state) => state.projectCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProject,
  } = projectCreate;

  const projectDelete = useSelector((state) => state.projectDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = projectDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PROJECT_CREATE_RESET });
      props.history.push(`/project/${createdProject._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PROJECT_DELETE_RESET });
    }
    dispatch(listProjects());
  }, [createdProject, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (project) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProject(project._id));
    }
  };
  const createHandler = () => {
    dispatch(createProject());
  };
  return (
    <div>
      <div className="row">
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>

      {loadingDelete && <LoadingBox />}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox />}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/product/${product._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
