/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsChallenge } from '../../redux/actions/challenge-actions';
import ChallengeCard2 from '../../Components/ChallengeCard/ChallengeCard2';

const DetailScreen = () => {
  const dispatch = useDispatch();
  const { challengeId } = useParams();
  const challengeDetails = useSelector((state) => state.challengeDetails);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, challenge } = challengeDetails;

  useEffect(() => {
    dispatch(detailsChallenge(challengeId));
  }, [dispatch, challengeId]);

  return (
    <>
      {loading ? (
        <div className="loading">LOADING</div>
      ) : error ? (
        <div className="error">ERROR</div>
      ) : (
        <ChallengeCard2 challenge={challenge} />
      )}
    </>
  );
};

export default DetailScreen;
