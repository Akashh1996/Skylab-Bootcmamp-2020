import React, { useState, useEffect } from 'react';
import './add-question.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { postQuestion, loadQuestionDetail, updateQuestion } from '../../redux/actions/questionAction';

function AddQuestion({ dispatch, history, questionDetail }) {
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadQuestionDetail(id));
  }, []);

  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionBody] = useState('');
  const [tag, setQuestionTag] = useState('');
  const [code, setCode] = useState('');
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  const addQuestion = {
    questionTitle,
    questionDescription,
    tag,
    code,
    owner: userLocalStorage?.user._id,

  };

  useEffect(() => {
    if (!_.isEmpty(id) && questionDetail) {
      setQuestionTitle(questionDetail.questionTitle);
      setQuestionBody(questionDetail.questionDescription);
      setQuestionTag(questionDetail.tag);
      setCode(questionDetail.code);
    }
  }, [questionDetail, id]);

  return (
    <section className="form-section">
      <form>
        <label htmlFor="question-title">
          Question Title
          <input
            spellCheck="false"
            type="text"
            onChange={(event) => setQuestionTitle(event.target.value)}
            value={questionTitle}
            required
          />
        </label>
        <label htmlFor="question-description">
          Question Description
          <textarea
            spellCheck="false"
            style={{ resize: 'vertical', height: '50px' }}
            type="text"
            onChange={(event) => setQuestionBody(event.target.value)}
            value={questionDescription}
            required
          />
        </label>
        <label htmlFor="question-code">
          Your Code
          <textarea
            spellCheck="false"
            type="text"
            onChange={(event) => setCode(event.target.value)}
            value={code}
          />
        </label>
        <label htmlFor="question-tag">
          Question tag
          <input
            type="text"
            onChange={(event) => setQuestionTag(event.target.value)}
            value={tag}
            required
            spellCheck="false"

          />
        </label>
        <div>
          <button
            type="button"
            className="button-submit"
            onClick={() => (_.isEmpty(id)
              ? dispatch(postQuestion(addQuestion), history.push('/'))
              : dispatch(updateQuestion({
                questionTitle,
                questionDescription,
                tag,
                code,
                owner: userLocalStorage.user._id,
                questionId: id,
              }, id, history.push('/'))))}
          >
            Submit
          </button>

        </div>

      </form>

    </section>
  );
}

function mapStateToProps(state) {
  return {
    questionDetail: state.questionReducer.questionDetail,
    user: state.userReducer.user,
  };
}
export default connect(mapStateToProps)(AddQuestion);
