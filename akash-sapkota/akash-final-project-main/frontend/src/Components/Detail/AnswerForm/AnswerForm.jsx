import React, { useState } from 'react';
import { connect } from 'react-redux';
import './answer-form.css';
import postAnswer from '../../../redux/actions/answerAction';

function AddQuestion({ dispatch, questionDetail }) {
  const [userLocalStorage] = useState(JSON.parse(window.localStorage.getItem('user')));

  const [answerDescription, setAnswerDescription] = useState('');
  const [code, setCode] = useState('');

  return (
    <>

      <section className="answer-form-section">
        <form className="answer-form">
          <div className="add-answer"><h2 className="user-answer">Post Your Answer</h2></div>
          <label htmlFor="answer-description" className="post-answer-description">
            Answer Description
            <textarea
              style={{ resize: 'vertical', height: '30px' }}
              className="data-test"
              type="text"
              onChange={(event) => setAnswerDescription(event.target.value)}
              value={answerDescription}
              spellCheck="false"

            />
          </label>
          <label htmlFor="answer-code" className="form-answer-code">
            Your Code
            <textarea
              id="textarea-code"
              className="data-test"
              spellCheck="false"
              type="text"
              onChange={(event) => setCode(event.target.value)}
              value={code}
              style={{ resize: 'vertical' }}

            />
          </label>
          <div>
            <button
              type="button"
              className="button-submit"
              onClick={() => {
                if (answerDescription) {
                  dispatch(postAnswer({
                    answerDescription,
                    code,
                    userId: userLocalStorage?.user?._id,
                    questionId: questionDetail._id,
                  }));
                }
                setCode('');
                setAnswerDescription('');
              }}
            >
              POST
            </button>
          </div>
        </form>
      </section>
    </>

  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    questionDetail: state.questionReducer.questionDetail,
  };
}
export default connect(mapStateToProps)(AddQuestion);
