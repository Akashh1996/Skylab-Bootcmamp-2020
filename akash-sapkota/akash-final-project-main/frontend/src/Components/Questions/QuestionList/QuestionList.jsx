import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './questionList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { loadQuestion, deleteQuestion } from '../../../redux/actions/questionAction';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),

  },

}));

function QuestionList({ dispatch, displayList }) {
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'));

  const { tag } = useParams();
  const classes = useStyles();
  useEffect(() => {
    dispatch(loadQuestion(tag));
  }, [tag, displayList?.length]);

  function canDelete(userId, ownerId) {
    const checkOwner = userId === ownerId;
    return checkOwner;
  }

  return (
    <>
      {displayList && displayList.length > 0 && displayList.map((question) => (
        <article className="question-article" key={question?._id}>
          <div className="question-article__content">
            <div className="content-header">
              <div className="image-wrapper">
                <Link to={`/user/${question?.owner?._id}`}><Avatar alt="Remy Sharp" src={question?.owner?.photo} /></Link>
              </div>
              <div className="content-header__right">
                <div className="owner-name">
                  {question?.owner?.displayName}
                  {' '}
                </div>
                <div className="date-query">
                  Asked at:
                  {' '}
                  <span className="date">{question?.date}</span>
                  {' '}
                </div>
              </div>
              <div className="buttons-user-logged">
                {
                  canDelete(userLocalStorage?.user._id, question?.owner?._id) && (
                    <>
                      <div>
                        <IconButton
                          aria-label="delete"
                          className={classes.margin}
                          id="data-test-delete"
                          onClick={() => dispatch(deleteQuestion(question?._id))}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </div>
                      <div>
                        <IconButton aria-label="delete" className={classes.margin}>
                          <Link to={`/add-question/${question?._id}`} style={{ color: 'grey' }}><EditOutlinedIcon /></Link>
                        </IconButton>
                      </div>
                    </>
                  )
                  }

              </div>
            </div>
            <div className="content-question">
              <h2 className="question-title"><Link to={`/question/${question?._id}`} className="data-test">{question?.questionTitle}</Link></h2>
              <div className="question__description">
                <p>
                  {' '}
                  {question?.questionDescription}
                  {' '}
                </p>
              </div>
              <Link to={`/${question?.tag}`} className="tags">{question?.tag}</Link>
            </div>
            <div className="content-footer">
              <div className="content-footer__left">
                <div className="icon-wrapper">
                  <QuestionAnswerOutlinedIcon />
                  <span>{question?.answers?.length}</span>
                </div>
              </div>
            </div>
          </div>
        </article>

      ))}
    </>
  );
}

QuestionList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  displayList: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    _id: String.isRequired,
  }),
};
QuestionList.defaultProps = {
  displayList: [],
  user: {},
};

function mapStateToProps(state) {
  return {
    displayList: state.questionReducer.displayList,
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps)(QuestionList);
