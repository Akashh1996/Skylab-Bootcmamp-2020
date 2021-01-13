import React from 'react';
import { Avatar } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import './answers.css';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../../redux/actions/answerAction';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function Answer({ questionDetail, dispatch }) {
  const classes = useStyles();
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  function canDelete(userId, ownerId) {
    const checkOwner = userId === ownerId;
    return checkOwner;
  }

  return (
    <>

      {questionDetail?.answers?.length > 0 && questionDetail.answers.map((answer) => (
        <section className="answers-detail" key={answer._id}>
          <article className="question-article-detail">
            <div className="question-detail-article__content">
              <div className="content-header">
                <div className="image-wrapper">
                  <Avatar alt="Remy Sharp" src={answer?.user?.photo} />

                </div>
                <div className="content-header__right">
                  <div className="owner-name">
                    {answer?.user?.displayName}
                    {' '}
                  </div>
                  <div className="date-query">
                    Posted At:
                    {' '}
                    <span className="date">{questionDetail.date}</span>
                    {' '}
                  </div>
                </div>

                <div className="buttons-user-logged">
                  {
                  canDelete(userLocalStorage?.user._id, answer?.user?._id) && (
                    <>
                      <div>
                        <IconButton
                          aria-label="delete"
                          className={classes.margin}
                          id="delete-botton"
                          onClick={() => dispatch(deleteAnswer(answer._id))}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </div>

                    </>
                  )
                  }

                </div>

              </div>
              <div className="question-description answer-description">
                <p>
                  {' '}
                  {answer.answerDescription}
                  {' '}
                </p>
              </div>
              <div className="code">
                {answer.code}
              </div>
            </div>
          </article>
        </section>
      ))}

    </>
  );
}

Answer.propTypes = {
  questionDetail: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({

    })),

    date: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,

};

Answer.defaultProps = {
  questionDetail: undefined,
};

function mapStateToProps(state) {
  return {
    questionDetail: state.questionReducer.questionDetail,
    user: state.userReducer.user,

  };
}

export default connect(mapStateToProps)(Answer);
