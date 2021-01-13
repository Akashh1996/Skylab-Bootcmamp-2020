/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import { loadQuestionDetail } from '../../redux/actions/questionAction';
import Answer from './Answer/Answers';
import AnswerForm from './AnswerForm/AnswerForm';
import '../Questions/QuestionList/questionList.css';
import './detail.css';

function Detail({ dispatch, questionDetail, match }) {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  const [id] = useState(match.params.questionId);
  useEffect(() => {
    dispatch(loadQuestionDetail(id));
  }, [questionDetail?.answers?.length]);

  return (
    <>
      {questionDetail && (
        <>
          <section className="question-detail" key={questionDetail._id}>
            <article className="question-article-detail" key={questionDetail._id}>
              <div className="question-detail-article__content">
                <div className="content-header">
                  <div className="image-wrapper">
                    <Link to={`/user/${questionDetail?.owner?._id}`}><Avatar alt="Remy Sharp" src={questionDetail?.owner?.photo} /></Link>

                  </div>
                  <div className="content-header__right">
                    <div className="owner-name">
                      {questionDetail?.owner?.displayName}
                      {' '}
                    </div>
                    <div className="date-query">
                      Asked at:
                      {' '}
                      <span className="date">{questionDetail.date}</span>
                      {' '}
                    </div>
                  </div>
                </div>
                <div className="content-question-detail">
                  <h2 className="question-title">{questionDetail.questionTitle}</h2>
                  <div className="question-description">
                    <p>
                      {' '}
                      {questionDetail.questionDescription}
                      {' '}
                    </p>
                  </div>
                  <Link to={`/${questionDetail.tag}`} className="tag-detail">{questionDetail.tag}</Link>
                </div>
                <div className="code">
                  {questionDetail.code}
                </div>
              </div>
            </article>
          </section>

          <div className="answers">
            <h1 className="answer-title">Answers</h1>
            <div className="answer-number">
              <QuestionAnswerOutlinedIcon />
            </div>
          </div>
          <Answer key={Date.now()} />
          {userLocalStorage?.user && (
          <AnswerForm />
          )}
        </>
      )}

    </>
  );
}

Detail.propTypes = {
  questionDetail: PropTypes.shape({
    questionTitle: PropTypes.string,
    questionDescription: PropTypes.string,
    tag: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
    _id: PropTypes.string,
    code: PropTypes.string,
    date: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

Detail.defaultProps = {
  questionDetail: undefined,
};

function mapStateToProps(state) {
  return {
    questionDetail: state.questionReducer.questionDetail,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(Detail);
