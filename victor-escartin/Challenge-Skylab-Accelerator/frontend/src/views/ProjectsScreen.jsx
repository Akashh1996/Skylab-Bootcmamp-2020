/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProject } from '../redux/actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProjectScreen(props) {
  const dispatch = useDispatch();
  const projectId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const projectDetails = useSelector((state) => state.projectDetails);
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
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{project.name}</h1>
                </li>
                <li>
                  Price : €
                  {project.price}
                </li>
                <li>
                  Description:
                  <p>{project.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">
                        €
                        {project.price}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {project.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {project.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(project.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ),
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
