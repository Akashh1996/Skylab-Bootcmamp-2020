/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './AdminScreen.css';
import { listChallenges } from '../../redux/actions/challenge-actions';

import TableItem from '../../Components/MaterialTable/TableItem';
import ChartBar from '../../Components/ChartBar/ChartBar';

function AdminScreen() {
  const challengeList = useSelector((state) => state.challengeList);
  const { loading, error, challenges } = challengeList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listChallenges());
  }, [dispatch]);

  return (
    <>
      <div className="adminScreen-container">
        {loading ? (
          <div className="loading">LOADING....</div>
        ) : error ? (
          <div className="error">ERROR, CHALLENGE NOT CREATED</div>
        ) : (
          <div>
            <div className="admin-list">
              <TableItem challenges={challenges} />
            </div>
            <div>
              <ChartBar challenges={challenges} />
            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default AdminScreen;
